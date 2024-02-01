## 安裝 step

```python
# Clone LLaMa-Factory
git clone https://github.com/hiyouga/LLaMA-Factory.git

# Install libs
cd LLaMA-Factory
pip install -r requirements.txt

pip install einops transformers_stream_generator (非必要)

# Make your dataset
sed -i 's/<NAME>/小西西/' data/self_cognition.json
sed -i 's/<AUTHOR>/許永昕/' data/self_cognition.json

# Let's go and train
sed -i 's/share=False/share=True/' src/train_web.py
sed -i 's/share=False/share=True/' src/web_demo.py

```

```python
# 修改 huggingface cache
export TRANSFORMERS_CACHE='/notebooks/HuggingfaceCash'
export HF_DATASETS_CACHE='/notebooks/HuggingfaceCash/Datasets'
```



## 一鍵開啟訓練頁

```bash
CUDA_VISIBLE_DEVICES=0 python src/train_web.py
```



## web demo

```bash
# template
python src/web_demo.py \
    --model_name_or_path path_to_llama_model \
    --adapter_name_or_path path_to_checkpoint \
    --template default \
    --finetuning_type lora
```

```bash
# deploy
python src/web_demo.py \
    --model_name_or_path /notebooks/HuggingfaceCash/models--01-ai--Yi-6B-Chat/snapshots/faaf9208a885eb8826db664de04b5512268f97ab \
    --adapter_name_or_path /notebooks/saves/Yi-6B-Chat/lora/train_2024-01-24-13-19 \
    --template default \
    --finetuning_type lora
```

##  合并 LoRA 权重并导出模型

```bash
python src/export_model.py \
    --model_name_or_path path_to_llama_model \
    --adapter_name_or_path path_to_checkpoint \
    --template default \
    --finetuning_type lora \
    --export_dir path_to_export \
    --export_size 2 \
    --export_legacy_format False
```



## API 服务

```bash
python src/api_demo.py \
    --model_name_or_path path_to_llama_model \
    --adapter_name_or_path path_to_checkpoint \
    --template default \
    --finetuning_type lora
    
# http://localhost:8000/docs

# deploy
python src/api_demo.py \
    --model_name_or_path /notebooks/HuggingfaceCash/models--01-ai--Yi-6B-Chat/snapshots/faaf9208a885eb8826db664de04b5512268f97ab \
    --adapter_name_or_path /notebooks/saves/Yi-6B-Chat/lora/train_2024-01-24-13-19 \
    --template default \
    --finetuning_type lora
```



## 關掉 wanba

```python
import os

os.environ["WANDB_DISABLED"] = "true"
```

## 修改 huggingface cache path

```python
# option 1 (好像只有在 python env 下有作用)
import os
os.environ['TRANSFORMERS_CACHE'] = '/notebooks/HuggingfaceCash'
os.environ['HF_DATASETS_CACHE'] = '/notebooks/HuggingfaceCash/Datasets'

# option 2
export TRANSFORMERS_CACHE='/notebooks/HuggingfaceCash'
export HF_DATASETS_CACHE='/notebooks/HuggingfaceCash/Datasets'

echo $TRANSFORMERS_CACHE
echo $HF_DATASETS_CACHE

# option 3
tokenizer = AutoTokenizer.from_pretrained("roberta-base", cache_dir="new_cache_dir/")
model = AutoModelForMaskedLM.from_pretrained("roberta-base", cache_dir="new_cache_dir/")
```