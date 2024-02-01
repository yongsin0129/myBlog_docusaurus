# FastGPT local deploy（ChatGLM3 + m3e + OneAPI）

## 架構圖

user ---> FastGPT ----> OneAPI -----> LLM model  + imbedding model



## 資料來源

[【超详细】纯本地部署的FastGPT知识库教程（基于ChatGLM3+m3e+oneapi）_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Ug4y1o7gb/?vd_source=cb35289c4a49f774ce7b06a26450dfa2)

[FastGPT配置文件及OneAPI程序： (rentry.org)](https://rentry.org/fbvo8)





## 文本內容 ( 接 openAI 的 API model)

FastGPT配置文件及OneAPI程序：
https://pan.baidu.com/s/1ZzRWYMCLd-tDxJjaJHUgjw?pwd=wuhe
提取码：wuhe

创建fastgpt目录：mkdir fastgpt

切换到fastgpt目录：cd fastgpt

下载docker-compose文件：curl -O https://raw.githubusercontent.com/labring/FastGPT/main/files/deploy/fastgpt/docker-compose.yml

下载config文件：curl -O https://raw.githubusercontent.com/labring/FastGPT/main/projects/app/data/config.json

docker-compose文件github：https://github.com/labring/FastGPT/blob/main/files/deploy/fastgpt/docker-compose.yml

config文件github：https://github.com/labring/FastGPT/blob/main/projects/app/data/config.json

切换fastgpt目录：cd \[wsl.localhost](http://wsl.localhost/)\Ubuntu\home\user-name\fastgpt user-name记得替换为你自己的用户名

拉取镜像：docker-compose pull

在后台运行容器：docker-compose up -d

FastGPT的页面：http://localhost:3020/

登录用户名为root，密码为docker-compose文件里DEFAULT_ROOT_PSW，默认密码1234





## 使用本地 LLM model 及 本地 vector model

### LLM model  ( 可用  llama2-factory , LM studio 來架)

ChatGLM3官方的一键包链接：https://pan.baidu.com/s/1fHElFanrdK9Y-pTpeY_azg
提取码：glut



### vector model 

用docker部署m3e模型，

默认用CPU运行：docker run -d -p 6008:6008 --name=m3e-large-api [registry.cn-hangzhou.aliyuncs.com/fastgpt_docker/m3e-large-api:latest](http://registry.cn-hangzhou.aliyuncs.com/fastgpt_docker/m3e-large-api:latest)
使用GPU运行：docker run -d -p 6008:6008 --gpus all --name=m3e-large-api registry.cn-hangzhou.aliyuncs.com/fastgpt_docker/m3e-large-api:latest

原镜像：
docker run -d -p 6008:6008 --name=m3e-large-api stawky/m3e-large-api:latest

docker run -d -p 6008:6008 --gpus all --name=m3e-large-api stawky/m3e-large-api:latest

查看被系统保留的端口：
netsh int ipv4 show excludedport tcp
保留端口给程序使用：
netsh int ipv4 add excludedportrange protocol=tcp startport=<起始端口> numberofports=<排除端口数量>

测试m3e的api：

```
curl --location \
 --request \
 POST 'http://192.168.88.94:6008/v1/embeddings' \ --header 'Authorization: Bearer sk-aaabbbcccdddeeefffggghhhiiijjjkkk' \
' \ --header 'Content-Type: application/json' \
 \ --data \
-raw '{  "model": "m3e",  "input": [" what is laf"] }'
```

localhost需要替换成你的ip地址，ip地址可以在你连接的网络的属性里查看，或者在cmd里使用：ipconfig查看WLAN或者以太网那一栏。注意，ip地址要填ipv4的地址，不要填成ipv6的地址





### OneAPI 

https://github.com/songquanpeng/one-api/tree/main

OneAPI 預設 port ：http://localhost:3000/

OneAPI网页后，使用root用户和默认密码123456登录

chatglm3的Base URL：http://localhost:8000  *** localhost修改为你的本地ip地址 ***

m3e的Base URL：http://localhost:6008  *** localhost记得修改为你的本地ip地址 ***

m3e密钥：sk-aaabbbcccdddeeefffggghhhiiijjjkkk

自定義渠道都設定好之後，生成令牌，點擊複製，內容格式如下

```
https://chat.oneapi.pro/#/?settings={

"key":"sk-NCkrdoTkp5YYyQsjE9B1B80795B747EeBa60F152E491B8Fd",

"url":"http://192.168.88.94:3000"

}
```



### fastGTP

docker-compose文件修改 

OPENAI_BASE_URL：填入从OneAPI令牌复制的url http://localhost:3000/v1 **localhost记得替换为你的本地ip地址**

CHAT_API_KEY：填入从OneAPI令牌复制的key



修改config文件ChatModels：
{
"model": "chatglm3",
"name": "chatglm3",
"maxContext": 4000,
"maxResponse": 4000,
"quoteMaxToken": 2000,
"maxTemperature": 1,
"vision": false,
"defaultSystemChatPrompt": ""
},
ChatGLM3-6B支持的上下文长度为8k，你可以将maxContext和maxResponse改为8000
可以在defaultSystemChatPrompt里设置你的系统默认提示词

修改config文件QAModels：
{
"model": "chatglm3",
"name": "chatglm3",
"maxContext": 4000,
"maxResponse": 4000,
"price": 0
}

修改config文件VectorModels：
{
"model": "m3e",
"name": "m3e",
"price": 0.1,
"defaultToken": 500,
"maxToken": 1800
}
QAModels和VectorModels都添加好后，记得在括号的前面加个英文逗号，不然config文件无法生效

重新更新配置文件，依次输入命令：
cd \[wsl.localhost](http://wsl.localhost/)\Ubuntu\home\user-name\fastgpt user-name记得换成你的Ubuntu用户名
docker-compose pull
docker-compose up -d

进入FastGPT网页：http://localhost:3020/
登录用户名为root，密码为docker-compose文件里DEFAULT_ROOT_PSW，默认密码1234



------

[new](https://rentry.org/)·[what](https://rentry.org/what)·[how](https://rentry.org/how)·[langs](https://rentry.org/langs)·[contacts](https://rentry.org/what#contacts)