# MaoYan API

猫眼 API

## 工作原理

跨站请求伪造 (CSRF), 伪造请求头 , 调用官方 API

## 安装

```shell
$ git clone https://github.com/xhconceit/MaoYanApi.git

$ npm install
```

## 运行

```shell
$ node index.js
```

服务器启动默认端口为 3000, 若不想使用 3000 端口 , 可使用以下命令 : Mac/Linux

```shell
$ PORT=4000 node index.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令 :

```shell
$ set PORT=4000 && node index.js
```

服务器启动默认 host 为 localhost,如果需要更改, 可使用以下命令 : Mac/Linux

```shell
$ HOST=127.0.0.1 node index.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令 :

```shell
$ set HOST=127.0.0.1 && node index.js
```

## 功能特性

1. 城市
2. 热映
3. 即将上映
4. 近期最受期待
5. 搜索电影
6. 搜索电影
7. 城市影院筛选
8. 城市影院列表
9. 搜索影院
10. 搜索影院
11. 电影详情
12. 电影影院筛选
13. 电影影院列表
14. 影院详情
15. 选择座位
16. 票房排名

## 接口文档

### 调用前须知

!> 文档全部使用 GET 请求

!> 默认不返回 cookie ,如果需要 cookie 请在请求头设置 set-cookie 为 true

!> 本项目仅供学习使用,请尊重版权，请勿利用此项目从事商业行为

!> 参数 `optimus_uuid` 是访问猫眼首页返回 cookie 里面的值 ,请自行获取

### 城市

说明 : 调用此接口 ,获取城市列表

**接口地址 :** `/city`

**调用例子 :** `/city`

### 热映

说明 : 调用此接口 ,获取正在热映的电影

**必选参数 :**

    ci : 城市ID

    optimus_uuid : uID

**接口地址 :** `/movie/hot`

**调用例子 :** `/movie/hot?ci=20&optimus_uuid=0EBC6C50362911EA9BE0C38C17C05E2EEA46F45F99614B618B06BBA29C86C236`

### 即将上映

说明 : 调用此接口 ,获取即将上映的电影

**必选参数 :**

    ci : 城市ID

    optimus_uuid : uID

**可选参数 :**

    limit : 返回数量

**接口地址 :** `/movie/coming`

**调用例子 :** `/movie/coming?ci=20&limit=10&optimus_uuid=0EBC6C50362911EA9BE0C38C17C05E2EEA46F45F99614B618B06BBA29C86C236`

### 近期最受期待

说明 : 调用此接口 ,获取近期最受期待的电影

**必选参数 :**

    ci : 城市ID

    optimus_uuid : uID

**可选参数 :**

    limit : 返回数量

    offset : 列表起始位置，默认值为0

**接口地址 :** `/movie/coming`

**调用例子 :** `/movie/coming?ci=20&limit=10&offset=0&optimus_uuid=0EBC6C50362911EA9BE0C38C17C05E2EEA46F45F99614B618B06BBA29C86C236`

### 搜索电影

说明 : 搜索电影有两个接口

#### 搜索 TOP 电影

说明 : 调用此接口 ,搜索电影 ,该接口只返回前面几条数据

**必选参数 :**

    kw : 关键词

**接口地址 :** `/movies/top/search`

**调用例子 :** `/movies/top/search?kw=大话西游`

#### 搜索电影

说明 : 调用此接口 ,搜索电影 ,该接口不可以返回第一条数据

**必选参数 :**

    kw : 关键词

**可选参数 :**

    limit : 返回数量

    offset : 列表起始位置，默认值为0 ,该值不可以为 0

**接口地址 :** `/movies/search`

**调用例子 :** `/movies/search?kw=大话西游&limit=10&offset=0`

### 城市影院筛选

说明 : 调用此接口 ,获取城市影院筛选

**必选参数 :**

    ci : 城市ID

    optimus_uuid : uID

**接口地址 :** `/cinema/filter`

**调用例子 :** `/cinema/filter?ci=20&optimus_uuid=0EBC6C50362911EA9BE0C38C17C05E2EEA46F45F99614B618B06BBA29C86C236`

### 城市影院列表

说明 : 调用此接口 ,获取城市影院列表

**必选参数 :**

    day : 日期

    reqId : 时间戳

    cityId : 城市id

    optimus_uuid : 城市id

**可选参数 :**

    limit : 返回数量

    offset : 列表起始位置，默认值为 0

    districtId : 县区ID, 用于筛选影院

    areaId : 商区ID, 用于筛选影院

    hallType : 放映影厅ID, 用于筛选影院

    brandId : 影院品牌ID, 用于筛选影院

    serviceId : 影院服务ID, 用于筛选影院

    lineId : 地铁线ID, 用于筛选影院

    stationId : 地铁站ID, 用于筛选影院

**接口地址 :** `/cinema`

**调用例子 :** `/cinema?day=2020-01-14&limit=10&offset=0&districtId=-1&areaId=-1&hallType=-1&brandId=-1&serviceId=-1&lineId=-1&stationId=-1&reqId=1579328443243&cityId=10&optimus_uuid=81816C30379C11EA866471AA6600D9F3FFCD3520A18D43F0B1C3B05472B68BB4`

### 搜索影院

说明 : 搜索影院有两个接口

#### 搜索 TOP 影院

说明 : 调用此接口 ,搜索影院 ,该接口只返回前面几条数据

**必选参数 :**

    kw : 关键词

**接口地址 :** `/cinema/top/search`

**调用例子 :** `/cinema/top/search?kw=万达广场`

#### 搜索影院

说明 : 调用此接口 ,搜索影院 ,该接口不可以返回第一条数据

**必选参数 :**

    kw : 关键词

**可选参数 :**

    limit : 返回数量

    offset : 列表起始位置，默认值为1 ,该值不可以为 0

**接口地址 :** `/cinema/search`

**调用例子 :** `/cinema/search?kw=万达广场&limit=10&offset=0`

### 电影详情

说明 : 调用此接口 ,获取电影详情

**必选参数 :**

    movieId : 电影ID

    optimus_uuid : uID

**接口地址 :** `/movie/detail`

**调用例子 :** `/movie/detail?movieId=1190122&optimus_uuid=0EBC6C50362911EA9BE0C38C17C05E2EEA46F45F99614B618B06BBA29C86C236`

### 电影影院筛选

说明 : 调用此接口 ,获取电影影院筛选

**必选参数 :**

    movieId : 电影ID

    day : 日期

**接口地址 :** `/cinema/filter`

**调用例子 :** `/cinema/filter?movieId=1190122&day=2020-01-14`

### 电影影院列表

说明 : 调用此接口 ,获取电影影院列表

**必选参数 :**

    movieId : 电影ID

    day : 日期

    reqId : 时间戳

    cityId : 城市id

    optimus_uuid : 城市id

**可选参数 :**

    limit : 返回数量

    offset : 列表起始位置，默认值为 0

    districtId : 县区ID, 用于筛选影院

    areaId : 商区ID, 用于筛选影院

    hallType : 放映影厅ID, 用于筛选影院

    brandId : 影院品牌ID, 用于筛选影院

    serviceId : 影院服务ID, 用于筛选影院

    lineId : 地铁线ID, 用于筛选影院

    stationId : 地铁站ID, 用于筛选影院

**接口地址 :** `/movie/cinema`

**调用例子 :** `/movie/cinema?movieId=1190122&day=2020-01-14&limit=10&offset=0&districtId=-1&areaId=-1&hallType=-1&brandId=-1&serviceId=-1&lineId=-1&stationId=-1&reqId=1579328443243&cityId=10&optimus_uuid=81816C30379C11EA866471AA6600D9F3FFCD3520A18D43F0B1C3B05472B68BB4`

### 影院详情

说明 : 调用此接口 ,获取影院详情

**必选参数 :**

    cinemaId : 影院id

    optimus_uuid : uID

**可选参数 :**

    movieId : 影院id

**接口地址 :** `/cinema/detail`

**调用例子 :** `/cinema/detail?movieId=1190122&cinemaId=16097&optimus_uuid=0EBC6C50362911EA9BE0C38C17C05E2EEA46F45F99614B618B06BBA29C86C236`

### 选择座位

说明 : 调用此接口 ,获取座位详情

**必选参数 :**

    cityId : 城市ID

    ci : 城市ID

    seqNo : 电影影院id

    optimus_uuid : uID

**接口地址 :** `/seating`

**调用例子 :** `/seating?cityId=20&ci=20&seqNo=202001140398521&optimus_uuid=0EBC6C50362911EA9BE0C38C17C05E2EEA46F45F99614B618B06BBA29C86C236`

### 票房排名

说明 : 调用此接口 ,获取票房排名详情

**可选参数 :**

    beginDate : 日期

**接口地址 :** `/piaofang`

**调用例子 :** `/piaofang?beginDate=20200108`

## 关于此文档

此文档由 [docsify](https://github.com/QingWei-Li/docsify/) 生成 docsify 是一个动
态生成文档网站的工具。不同于 GitBook、Hexo 的地方是它不会生成将 .md 转成 .html
文件，所有转换工作都是在运行时进行。
