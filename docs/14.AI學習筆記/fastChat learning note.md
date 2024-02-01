## 前言

fastChat 啟動需要包含 3 個物件 : controller , worker , api 

## 啟動步驟

```bash
# 啟動 container
docker run -it --name fastchat -v /$(pwd)/models:/models --gpus=all -p 8000:8000 pytorch/pytorch:2.0.1-cuda11.7-cudnn8-devel

# 進入 container
docker exec -it fastchat bash 

# 如果無法下載的話，再用下面的代理
# pip3 config set global.index-url https://mirrors.aliyun.com/pypi/simple 
# pip3 config set install.trusted-host mirrors.aliyun.com

# 安装依赖环境
pip3 install "fschat[model_worker,webui]"
pip3 install transformers accelerate sentencepiece
```



### controller : 21001

```bash
# 首先启动 controller ：
python3 -m fastchat.serve.controller --host 172.17.0.2 --port 21001 
```



### worker  : 8080    (chat model  ,  embedding model)

#### chat model

```bash
#  必须是本地ip  ( docker內的local ip)
python3 -m fastchat.serve.model_worker --load-8bit --model-names chatglm3-6b --model-path /models/chatglm3-6b --controller-address http://172.17.0.2:21001 --worker-address http://172.17.0.2:8080 --host 0.0.0.0 --port 8080
```

#### embedding model

```bash
# 安装解决 
apt update && apt install libprotobuf-dev protobuf-compiler
pip3 install google protocol

# 模型比较小不需要 8bit 量化了：
python3 -m fastchat.serve.model_worker --model-names bge-zh --model-path /models/bge-large-zh --controller-address http://172.17.0.2:21001 --worker-address http://172.17.0.2:8080 --host 0.0.0.0 --port 8080

# debug 用
python3 -m fastchat.serve.cli --debug  --model /models/bge-large-zh

可以解析 embedding 模型：
BertModel(
  (embeddings): BertEmbeddings(
    (word_embeddings): Embedding(21128, 1024, padding_idx=0)
    (position_embeddings): Embedding(512, 1024)
    (token_type_embeddings): Embedding(2, 1024)
    (LayerNorm): LayerNorm((1024,), eps=1e-12, elementwise_affine=True)
    (dropout): Dropout(p=0.1, inplace=False)
  )
```



### API :8000

```bash
# 最后启动 openapi的 兼容服务 地址 8000
python3 -m fastchat.serve.openai_api_server --controller-address http://172.17.0.2:21001 --host 0.0.0.0 --port 8000
```

### web demo :8000

```bash

pip3 install fschat[model_worker,webui] pydantic==1.10.13

python3 -m fastchat.serve.gradio_web_server --controller-url http://172.17.0.2:21001 --host 0.0.0.0 --port 8000

```





### 測試

```
curl http://localhost:8000/v1/chat/completions   -H "Content-Type: application/json"   -d '{
    "model": "chatglm3-6b",
    "messages": [
      {
        "role": "system",
        "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."
      },
      {
        "role": "user",
        "content": "hello,how are you"
      }
    ]
  }'
```

```
curl http://localhost:8000/v1/embeddings \
 -H "Content-Type: application/json" \
 -d '{
  "input": "Your text string goes here",
  "model": "bge-zh"
}'
```

## 問題排解

### 顯存不足

解决增加参数：https://github.com/lm-sys/FastChat/issues/657

```
torch.cuda.OutOfMemoryError: CUDA out of memory. 

Tried to allocate 108.00 MiB (GPU 0; 10.91 GiB total capacity; 10.67 GiB already allocated; 31.75 MiB free; 10.68 GiB reserved in total by PyTorch) 
If reserved memory is >> allocated memory try setting max_split_size_mb to avoid fragmentation.  
See documentation for Memory Management and PYTORCH_CUDA_ALLOC_CONF
```



通过增加参数  --load-8bit  --load-4bit 解决

类似 python 代码中的：.quantize(8).cuda()
