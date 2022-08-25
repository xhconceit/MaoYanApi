# 猫眼API

猫眼 Node.js API service

## 灵感来自

[Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)


## 环境要求
需要 NodeJS 8.12+ 环境

## 安装

```shell
git clone https://github.com/xhconceit/maoyanapi

yarn
```

## 运行

```shell
$ node app.js
```

服务器启动默认端口为 3000,若不想使用 3000 端口,可使用以下命令: Mac/Linux

```shell
$ PORT=4000 node app.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令:

```shell
$ set PORT=4000 && node app.js
```

## 功能特性

1. 城市
2. 热映电影
3. 近期最受期待
4. 电影分类
5. 电影列表
6. 电影详情
7. 电影放映日期
8. 电影筛选影院
9. 获取播放当前电影的影院
10. 城市影院筛选
11. 影院列表
12. 影院详情
13. 影院播放电影列表
14. 座位
15. 搜索电影，影院
16. 搜索影院
17. 搜索电影
18. 明星详情


## 接口文档

### 调用前须知


!> 本项目仅供学习使用,请尊重版权，请勿利用此项目从事商业行为或进行破坏版权行为

!> 调用前需要在当前项目下新建一个 cookie.txt 文件，并在浏览器登陆自己的账号获取 cookie ，写入 cookie.txt 文件中，否则会有一些 API 无法调用。

!> 全部接口都是使用 GET 请求

#### 1. 城市

说明: 获取全部城市名字和 ID

**接口地址 :** `/city`

#### 2. 热映电影

说明: 正在热播的电影

必选参数: 

`ci`: 城市 id

`ct`: 城市名字

**接口地址 :** `/movie/hot`

**调用例子 :** `/movie/hot?ci=20&ct=广州`

#### 3. 近期最受期待

说明: 近期最受期待的电影

必选参数: 

`ci`: 城市 id

`ct`: 城市名字

可选参数: 

`limit`: 返回数量 , 默认为 10

`offset`: 偏移数量 , 默认为 0

**接口地址 :** /movie/expected

**调用例子 :** /movie/expected?ci=20&ct=广州`

#### 4. 电影分类

说明: 分类下的电影

可选参数: 

`sortId`: 电影排序 id ，默认: 1。 1: 热门排序 2: 时间排序 3: 评价排序

`showType`: 电影类型 id，默认:3。 1: 正在热映 2: 即将上映 3: 经典影片

`limit`: 返回数量 , 默认为 10

`offset`: 偏移数量 , 默认为 0


**接口地址 :** /movie/class

**调用例子 :** /movie/class

#### 5. 电影列表

说明: 电影列表

必选参数: 

`movieIds`: 电影 ID，多部电影以 , 隔开。

**接口地址 :** /movie/list

**调用例子 :** /movie/list?movieIds=7290,1367251

#### 6. 电影详情

说明: 电影详情

必选参数: 

`movieId`: 电影ID

**接口地址 :** /movie/detail

**调用例子 :** /movie/detail?movieId=1359034

#### 7. 电影放映日期

说明: 获取电影放映日期

必选参数: 

`ci`: 城市id

`movieId`: 电影ID

**接口地址 :** /movie/days

**调用例子 :** /movie/days?movieId=1359034&ci=20

#### 8. 电影筛选影院

说明: 电影筛选影院

必选参数: 

`ci`: 城市 ID

`movieId`: 电影ID

可选参数: 

`showDate`: 日期，默认今天，格式: YYYY-MM-DD

**接口地址 :** /movie/filter/cinema

**调用例子 :** /movie/filter/cinema?movieId=1359034&ci=20

#### 9. 获取播放当前电影的影院

说明: 获取播放当前电影的影院

必选参数: 

`ci`: 城市 ID

`movieId`: 电影ID

可选参数: 

`lat`: 纬度

`lng`: 经度

`limit`: 返回数量 , 默认为 10

`offset`: 偏移数量 , 默认为 0

`districtId`: 区号 , 默认 -1

`lineId`: 地铁线 , 默认 -1

`areaId`: 区域 , 默认 -1

`stationId`: 地铁站 , -1

`brandIds`: 影城 , 默认 -1

`serviceIds`: 影城服务 , 默认 -1 , 1: 改签 , 2: 退票

`hallTypeIds`: 影厅类型 , 默认 all

`languageIds`: 放映语言 , 默认 all

`dimIds`: 影片版本 , 默认 all'

**接口地址 :** /movie/cinema?movieId=1359034&ci=20

**调用例子 :** /movie/cinema?movieId=1359034&ci=20

#### 10. 城市影院筛选

说明: 城市影院筛选

必选参数: 

`ci`: 城市 ID

**接口地址 :** /cinema/filter

**调用例子 :** /cinema/filter?ci=1

#### 11. 影院列表

说明: 影院列表

必选参数: 

`ci`: 城市 ID

可选参数: 

`showDate`: 日期，默认今天，格式: YYYY-MM-DD

`limit`: 返回数量 , 默认为 10

`offset`: 偏移数量 , 默认为 0

`districtId`: 区号 , 默认 -1

`lineId`: 地铁线 , 默认 -1

`hallType`: 影厅类型 , 默认-1

`brandId`: 影城 , 默认-1

`serviceId`: 影城服务 , 1: 改签 , 2: 退票

`areaId`: 区域 , 默认 -1

`stationId`: 地铁站 , -1

**接口地址 :** /cinemas

**调用例子 :** /cinemas?ci=20

#### 12. 影院详情

说明: 影院详情

必选参数: 

`cinemaId`: 影院 ID

**接口地址 :** /cinema

**调用例子 :** /cinema?cinemaId=37650

#### 13. 影院播放电影列表

说明: 影院播放电影列表

必选参数: 

`cinemaId`: 影院 ID

`ci`: 城市 ID

**接口地址 :** /cinema/movies

**调用例子 :** /cinema/movies?ci=20&cinemaId=37650

#### 14. 座位

说明: 座位

必选参数: 

`seqNo`: 电影播放场次 id

`ci`: 城市 ID

`ct`: 城市名字

**接口地址 :** /seats

**调用例子 :** /seats?seqNo=202208240027839&ci=20&ct=广州

#### 15. 搜索电影，影院

说明: 搜索电影和影院，只返回几条数据

必选参数: 

`ci`: 城市 ID

`kw`: 搜索内容

**接口地址 :** /search

**调用例子 :** /search?ci=20&kw=万

#### 16. 搜索影院

说明: 搜索影院，第一条数据查询不到。

必选参数: 

`ci`: 城市 ID

`kw`: 搜索内容

可选参数: 

`limit`: 返回数量 , 默认为 10

`offset`: 偏移数量 , 默认为 0

**接口地址 :** /search/cinemas

**调用例子 :** /search/cinemas?ci=20&kw=万

#### 17. 搜索电影

说明: 搜索电影，第一条数据查询不到。

必选参数: 

`ci`: 城市 ID

`kw`: 搜索内容

可选参数: 

`limit`: 返回数量 , 默认为 10

`offset`: 偏移数量 , 默认为 0

**接口地址 :** /search/movies

**调用例子 :** /search/movies?ci=20&kw=万

#### 18. 明星详情

说明: 明星详情

必选参数: 

`id`: 明星 ID

**接口地址 :** /celebrity

**调用例子 :** /celebrity?id=28947

## License

[The MIT License (MIT)](https://github.com/Binaryify/NeteaseCloudMusicApi/blob/master/LICENSE)