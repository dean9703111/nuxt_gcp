# nuxt_baobao
這個是nuxt單純前端的一些小實驗專案
搭配上GCP App Engine的serverless架構
[medium文章參考](https://medium.com/dean-lin/nuxtjs-gcp-serverless%E5%AF%A6%E6%88%B0-3f1ae8667533)  

因為對於GCP不夠瞭解，一開始使用彈性(env:flex)環境被扣錢了QQ  
如果你不想被扣錢，請使用標準環境，他會給予你每日配額
![image](/READMEIMG/app_engine.png)  

另外如果你的instance_class如果設定是F1以上，就是一定要付費喔！！！！！！  
官方文件建議要用到F2，但是個人實測後，F1也是可以正常跑的

# deploy方式
```
gcloud app deploy
```

[google cloud build收費標準(前120分鐘免費)](https://cloud.google.com/cloud-build/pricing?hl=zh-tw)
[yaml設定文件](https://cloud.google.com/appengine/docs/standard/python/config/appref#scaling_elements)


參考資源：
[GCP官方說明免費配額](https://cloud.google.com/free/docs/gcp-free-tier)
[nuxt各種component安裝及基礎運用](https://www.yasminzy.com/nuxt)
[Google Cloud Platform 的終身免費方案(Free)](https://tech.digitgeek.net/t/9.html)
## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


