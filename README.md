## 一个将图片通过tinypng压缩之后上传到七牛云的小工具
#### 使用方法
```js
npm i compress-image-by-tinify or yarn add compress-image-by-tinify
```

```js
const compressImageAndUpload = require('compressImageAndUpload')
```

```js
const response = await compressImageAndUpload(key, uploadUrl, file, token, timeout);
```

#### 接受参数
* key tinypng 申请的key
* uploadUrl 图床地址
* file 上传图片地址/
* token 上传图床的token
* timeout 上传图床超时时间

#### 返回值

> 具体返回的值由生成七牛云token时指定

#### 缺点

> 由于tinypng压缩算法的问题 等待时间较长
