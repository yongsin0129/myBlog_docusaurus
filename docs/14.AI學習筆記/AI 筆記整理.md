## 前言 : 

目前 NLP 領域的開源 model 已經有成人的語言能力，不像以前需要從幼稚園開始理解文字。

CV 方面比較容易入門，NLP 在訓練上需要大量的 GUP ram，一般人玩不起訓練這塊。

## model

[排行榜 | C-Eval: 一个适用于大语言模型的多层次多学科中文评估套件 (cevalbenchmark.com)](https://cevalbenchmark.com/static/leaderboard_zh.html)

C - Eval 可以找近期排名較高的 model 來當 base 做訓練

- Qwen 7B - 對敏感詞抓的很嚴格, 能做基本對答，理解 context 的能力不錯
- Yi-6B - 正體能力足，不會有敏感詞，能做基本對答，理解 context 的能力不錯 ( 適合用來做 TW app 的 base )
- Llama2 , Atom - 英文能力可能跟 GPT3 差不多，但中文能力很差
- chatGLM3

## 知識點

- model 參數在半經度上，差不多是乘 2 ，所以 7B 的 model 做 reference 差不多需要 GUP ram 14GB，如果是訓練的話，可能要 3-4倍
- 預訓練 model 如果想要訓練成了解我們身邊知識的小秘書，有兩種方式
  - fine-tune 需要用到 GPU 訓練
  - ( RAG ) 將知識 embeding 存入向量資料庫，對於 user 的 query 一樣做 embeding ，查詢 vector DB 後，結合 search result 做 prompting ，有一套 prompt template

## 雲端訓練跟測試 

google colab

paperspace



雲端部屬

paperspace

replica



## 線上客制化小秘書 Saas  ( open source )

- [FastGPT](https://cloud.fastgpt.in/account) -  依使用自定義的 token 收費  ( 需儲值 )，  有 API 文檔 
  - 高級編程自定義流程
  - 外部使用可設定金額上限
  - 外部有 web demo , iframe , embed script 小圈圈 三種方式
  - 有對話 log 可查看，也可定制修改 
  - 缺點
    - DB 接受格式少  :  txt , pdf , docx  (csv 只接受 index , content 二列的 template)
    - 無法使用 openai key 



- [Dify.AI ](https://cloud.dify.ai/apps) - 除 openai key 之外，也支持各大主流的收費 api  ( 用月費進行收費升級 DB 容量 )，有 API 文檔
  - DB 格式豐富 已支持 TXT、 MARKDOWN、 PDF、 HTML、 XLS、 DOC、 DOC、 CSV、 EML、 MSG、 PPT、 XML、 JPG、 JPEG、 PNG、 WEBP、 GIF、 SVG、 JPG、 JPEG、 PNG、 WEBP、 GIF、 SVG，每个文件不超过 15MB。
  - DB 可同步 notion 內容
  - 有對話 log 可查看，也可定制修改 
  - 有標註功能 (特定問題 ， 使用特定回答) ，內建自動查找 DB ，找無資料就回覆無資料 
  - 免費版限制 openai api ，vector db 5mb , app 10 個
  - 缺點 : 
    - 外部使用 無 設定金額上限 (可以用 oneAPI 解決金額問題 )
    - 線上免費版本 : 外部使用只有 web demo 無 iframe , embed 小圈圈 ， 本地部屬版本有這個功能



## local deploy ( 需要用到本地的 GPU , ngrok 將 url 導出)

1. - 可以使用 fastchat 快速架一個 LLM ，將 API 記下 (也支持 embedding model , like BGE)
   - 使用 LMstudio 快速架一個 LLM ，也有 API 服務
   - 用 Llama2 factory 也可以架 LLM , 也有 API 服務
   - 用 text-generation-webui 也可以架 LLM ，支援 huggingface model , 也有 API 服務
2. 使用 FastGPT , Dify ,  Langchain-Chatcha 這類有 RAG engine 的框架與自已架的 model API 結合 

## 版本問題

嘗試專案的時候，先找對方有沒有 dockerfile

torch 1 跟 2

transformers 的本版 4.32 4.35 4.36 有些會出現 no chat method 的 error

cuda 版本 11.2 不能裝 flash-attn



有時候安裝完需要重開 



## 01-ai 6B finetune error msg

* 使用 (yi) root@njm978czux:/notebooks/finetune/scripts# bash run_sft_Yi_6b.sh

```
(yi) root@njm978czux:/notebooks/finetune/scripts# bash run_sft_Yi_6b.sh
[2024-01-19 10:07:10,366] [INFO] [real_accelerator.py:158:get_accelerator] Setting ds_accelerator to cuda (auto detect)
[2024-01-19 10:07:12,401] [WARNING] [runner.py:203:fetch_hostfile] Unable to find hostfile, will proceed with training with local resources only.
[2024-01-19 10:07:12,401] [INFO] [runner.py:570:main] cmd = /opt/conda/envs/yi/bin/python -u -m deepspeed.launcher.launch --world_info=eyJsb2NhbGhvc3QiOiBbMF19 --master_addr=127.0.0.1 --master_port=29500 --enable_each_rank_log=None main.py --data_path ../yi_example_dataset --model_name_or_path ../../Yi-6B-Chat --per_device_train_batch_size 1 --per_device_eval_batch_size 1 --max_seq_len 4096 --learning_rate 2e-6 --weight_decay 0. --num_train_epochs 4 --training_debug_steps 20 --gradient_accumulation_steps 1 --lr_scheduler_type cosine --num_warmup_steps 0 --seed 1234 --gradient_checkpointing --zero_stage 2 --deepspeed --offload --output_dir ./ys-model
[2024-01-19 10:07:14,789] [INFO] [real_accelerator.py:158:get_accelerator] Setting ds_accelerator to cuda (auto detect)
[2024-01-19 10:07:16,743] [INFO] [launch.py:138:main] 0 NV_LIBNCCL_DEV_PACKAGE=libnccl-dev=2.15.5-1+cuda11.8
[2024-01-19 10:07:16,743] [INFO] [launch.py:138:main] 0 NV_LIBNCCL_DEV_PACKAGE_VERSION=2.15.5-1
[2024-01-19 10:07:16,743] [INFO] [launch.py:138:main] 0 NCCL_VERSION=2.15.5-1
[2024-01-19 10:07:16,743] [INFO] [launch.py:138:main] 0 NV_LIBNCCL_DEV_PACKAGE_NAME=libnccl-dev
[2024-01-19 10:07:16,743] [INFO] [launch.py:138:main] 0 NV_LIBNCCL_PACKAGE=libnccl2=2.15.5-1+cuda11.8
[2024-01-19 10:07:16,743] [INFO] [launch.py:138:main] 0 NV_LIBNCCL_PACKAGE_NAME=libnccl2
[2024-01-19 10:07:16,743] [INFO] [launch.py:138:main] 0 NV_LIBNCCL_PACKAGE_VERSION=2.15.5-1
[2024-01-19 10:07:16,743] [INFO] [launch.py:145:main] WORLD INFO DICT: {'localhost': [0]}
[2024-01-19 10:07:16,743] [INFO] [launch.py:151:main] nnodes=1, num_local_procs=1, node_rank=0
[2024-01-19 10:07:16,743] [INFO] [launch.py:162:main] global_rank_mapping=defaultdict(<class 'list'>, {'localhost': [0]})
[2024-01-19 10:07:16,743] [INFO] [launch.py:163:main] dist_world_size=1
[2024-01-19 10:07:16,743] [INFO] [launch.py:165:main] Setting CUDA_VISIBLE_DEVICES=0
[2024-01-19 10:07:19,029] [INFO] [real_accelerator.py:158:get_accelerator] Setting ds_accelerator to cuda (auto detect)
/opt/conda/envs/yi/lib/python3.10/site-packages/transformers/deepspeed.py:23: FutureWarning: transformers.deepspeed module is deprecated and will be removed in a future version. Please import deepspeed modules directly from transformers.integrations
  warnings.warn(
[2024-01-19 10:07:21,750] [INFO] [comm.py:637:init_distributed] cdb=None
[2024-01-19 10:07:21,750] [INFO] [comm.py:668:init_distributed] Initializing TorchBackend in DeepSpeed with backend nccl
tokenizer path exist
You are attempting to use Flash Attention 2.0 without specifying a torch dtype. This might lead to unexpected behaviour
You are attempting to use Flash Attention 2.0 with a model initialized on CPU. Make sure to move the model to GPU after initializing it on CPU with `model.to('cuda')`.
Loading checkpoint shards: 100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 3/3 [00:34<00:00, 11.53s/it]
length of tokenizer is 64000
resize_token_embeddings is 64000
../yi_example_dataset/data/train.json
True
../yi_example_dataset/data/eval.json
True
init PromptRawDataset with dataname ../yi_example_dataset
data path is ../yi_example_dataset
Downloading data files: 100%|████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 2/2 [00:00<00:00, 2736.90it/s]
Extracting data files: 100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 2/2 [00:00<00:00, 66.61it/s]
Generating train split: 2852 examples [00:00, 64079.43 examples/s]
Generating eval split: 148 examples [00:00, 57334.16 examples/s]
finish get raw dataset
length of train dataset 2852
length of eval dataset 148
finish create dataset
Using /root/.cache/torch_extensions/py310_cu118 as PyTorch extensions root...
Creating extension directory /root/.cache/torch_extensions/py310_cu118/cpu_adam...
Detected CUDA files, patching ldflags
Emitting ninja build file /root/.cache/torch_extensions/py310_cu118/cpu_adam/build.ninja...
Building extension module cpu_adam...
Allowing ninja to set a default number of workers... (overridable by setting the environment variable MAX_JOBS=N)
[2024-01-19 10:14:05,900] [INFO] [launch.py:315:sigkill_handler] Killing subprocess 112


[2024-01-19 10:14:05,903] [ERROR] [launch.py:321:sigkill_handler] ['/opt/conda/envs/yi/bin/python', '-u', 'main.py', '--local_rank=0', '--data_path', '../yi_example_dataset', '--model_name_or_path', '../../Yi-6B-Chat', '--per_device_train_batch_size', '1', '--per_device_eval_batch_size', '1', '--max_seq_len', '4096', '--learning_rate', '2e-6', '--weight_decay', '0.', '--num_train_epochs', '4', '--training_debug_steps', '20', '--gradient_accumulation_steps', '1', '--lr_scheduler_type', 'cosine', '--num_warmup_steps', '0', '--seed', '1234', '--gradient_checkpointing', '--zero_stage', '2', '--deepspeed', '--offload', '--output_dir', './ys-model'] exits with return code = -9


(yi) root@njm978czux:/notebooks/finetune/scripts# [1/4] /usr/local/cuda/bin/nvcc  -DTORCH_EXTENSION_NAME=cpu_adam -DTORCH_API_INCLUDE_EXTENSION_H -DPYBIND11_COMPILER_TYPE=\"_gcc\" -DPYBIND11_STDLIB=\"_libstdcpp\" -DPYBIND11_BUILD_ABI=\"_cxxabi1011\" -I/opt/conda/envs/yi/lib/python3.10/site-packages/deepspeed/ops/csrc/includes -I/usr/local/cuda/include -isystem /opt/conda/envs/yi/lib/python3.10/site-packages/torch/include -isystem /opt/conda/envs/yi/lib/python3.10/site-packages/torch/include/torch/csrc/api/include -isystem /opt/conda/envs/yi/lib/python3.10/site-packages/torch/include/TH -isystem /opt/conda/envs/yi/lib/python3.10/site-packages/torch/include/THC -isystem /usr/local/cuda/include -isystem /opt/conda/envs/yi/include/python3.10 -D_GLIBCXX_USE_CXX11_ABI=0 -D__CUDA_NO_HALF_OPERATORS__ -D__CUDA_NO_HALF_CONVERSIONS__ -D__CUDA_NO_BFLOAT16_CONVERSIONS__ -D__CUDA_NO_HALF2_OPERATORS__ --expt-relaxed-constexpr -gencode=arch=compute_61,code=compute_61 -gencode=arch=compute_61,code=sm_61 --compiler-options '-fPIC' -O3 --use_fast_math -std=c++17 -U__CUDA_NO_HALF_OPERATORS__ -U__CUDA_NO_HALF_CONVERSIONS__ -U__CUDA_NO_HALF2_OPERATORS__ -gencode=arch=compute_61,code=sm_61 -gencode=arch=compute_61,code=compute_61 -c /opt/conda/envs/yi/lib/python3.10/site-packages/deepspeed/ops/csrc/common/custom_cuda_kernel.cu -o custom_cuda_kernel.cuda.o 
[2/4] c++ -MMD -MF cpu_adam.o.d -DTORCH_EXTENSION_NAME=cpu_adam -DTORCH_API_INCLUDE_EXTENSION_H -DPYBIND11_COMPILER_TYPE=\"_gcc\" -DPYBIND11_STDLIB=\"_libstdcpp\" -DPYBIND11_BUILD_ABI=\"_cxxabi1011\" -I/opt/conda/envs/yi/lib/python3.10/site-packages/deepspeed/ops/csrc/includes -I/usr/local/cuda/include -isystem /opt/conda/envs/yi/lib/python3.10/site-packages/torch/include -isystem /opt/conda/envs/yi/lib/python3.10/site-packages/torch/include/torch/csrc/api/include -isystem /opt/conda/envs/yi/lib/python3.10/site-packages/torch/include/TH -isystem /opt/conda/envs/yi/lib/python3.10/site-packages/torch/include/THC -isystem /usr/local/cuda/include -isystem /opt/conda/envs/yi/include/python3.10 -D_GLIBCXX_USE_CXX11_ABI=0 -fPIC -std=c++17 -O3 -std=c++17 -g -Wno-reorder -L/usr/local/cuda/lib64 -lcudart -lcublas -g -march=native -fopenmp -D__AVX256__ -D__ENABLE_CUDA__ -c /opt/conda/envs/yi/lib/python3.10/site-packages/deepspeed/ops/csrc/adam/cpu_adam.cpp -o cpu_adam.o 
[3/4] c++ -MMD -MF cpu_adam_impl.o.d -DTORCH_EXTENSION_NAME=cpu_adam -DTORCH_API_INCLUDE_EXTENSION_H -DPYBIND11_COMPILER_TYPE=\"_gcc\" -DPYBIND11_STDLIB=\"_libstdcpp\" -DPYBIND11_BUILD_ABI=\"_cxxabi1011\" -I/opt/conda/envs/yi/lib/python3.10/site-packages/deepspeed/ops/csrc/includes -I/usr/local/cuda/include -isystem /opt/conda/envs/yi/lib/python3.10/site-packages/torch/include -isystem /opt/conda/envs/yi/lib/python3.10/site-packages/torch/include/torch/csrc/api/include -isystem /opt/conda/envs/yi/lib/python3.10/site-packages/torch/include/TH -isystem /opt/conda/envs/yi/lib/python3.10/site-packages/torch/include/THC -isystem /usr/local/cuda/include -isystem /opt/conda/envs/yi/include/python3.10 -D_GLIBCXX_USE_CXX11_ABI=0 -fPIC -std=c++17 -O3 -std=c++17 -g -Wno-reorder -L/usr/local/cuda/lib64 -lcudart -lcublas -g -march=native -fopenmp -D__AVX256__ -D__ENABLE_CUDA__ -c /opt/conda/envs/yi/lib/python3.10/site-packages/deepspeed/ops/csrc/adam/cpu_adam_impl.cpp -o cpu_adam_impl.o 
[4/4] c++ cpu_adam.o cpu_adam_impl.o custom_cuda_kernel.cuda.o -shared -lcurand -L/opt/conda/envs/yi/lib/python3.10/site-packages/torch/lib -lc10 -lc10_cuda -ltorch_cpu -ltorch_cuda -ltorch -ltorch_python -L/usr/local/cuda/lib64 -lcudart -o cpu_adam.so
```

