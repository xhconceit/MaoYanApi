const moment = require('moment')
module.exports = (query, request) => {
  query._log && console.log(`module[播放当前电影的影院]: /movie/cinema  ${
    [
      'movieId: 电影id',
      'ci: 城市id',
      'lat?: 纬度',
      'lng?: 经度',
      'offset?: 偏移量，默认0',
      'limit?: 返回数量，默认20',
      'districtId?:区号，默认-1',
      'lineId?: 地铁线，默认-1',
      'areaId?: 区域，默认-1',
      'stationId?: 地铁站，-1',
      'brandIds?: 影城，默认-1',
      'serviceIds?: 影城服务,默认-1，1改签，2退票',
      'hallTypeIds?: 影厅类型，默认all',
      'languageIds?: 放映语言，默认all',
      'dimIds?: 影片版本，默认all'
    ].join('  ')
  }\n`)

  let params = {
    cityId: query.ci,
    ci: query.ci,
    movieId: query.movieId,
    limit: query.limit || 20,
    offset: query.offset || 0,
    channelId: 4,
    showDate: moment().format('YYYY-MM-DD'),
    districtId: query.districtId || -1, //区号
    lineId: query.lineId || -1,// 地铁线路id -1
    areaId: query.areaId || -1,// 区域id
    stationId: query.stationId || -1, //地铁站id
    brandIds:  `[${query.brandIds||-1}]`, //影城 id
    serviceIds:`[${query.serviceIds || -1}]`,// 影院服务  1改签 2退票
    hallTypeIds: `["${query.hallTypeIds || "all"}"]`,// 影厅类型
    languageIds: `["${query.languageIds||"all"}"]`,//放映语言
    dimIds: `["${query.dimIds||"all"}"]`,//影片版本
  }
  /// 经纬度
  const { lat, lng } = query
  if (lat && lng) {
    params.lat = lat
    params.lng = lng
  }

  const data = {
    params,
    cookie: query['cookie'],
    _log: query._log
  }
  return request(
    'GET', `http://m.maoyan.com/api/mtrade/mmcs/cinema/v2/select/movie/cinemas.json`, data
  )
}

//movieId: 电影id
// day:  日期
// limit : 返回数量 , 默认为 10//
// offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*10, 其中 10 为 limit 的值 , 默认为 0
// districtId: -1 县区
// areaId: -1 商区

// hallType: -1 特殊厅
// brandId: -1  品牌
// serviceId: -1 特色功能

// lineId: -1 地铁线
// stationId: -1 地铁站
// reqId 当前时间戳/
// cityId: 城市id//
// optimus_uuid: 

// ,
// {
//   "name": "电影影院",
//   "path": "/movie/cinema",
//   "file": "movie_cinema.js",
//   "method": "GET",
//   "data": [
//     {
//       "name": "movieId",
//       "type": "String",
//       "default": "",
//       "details": "电影ID",
//       "required": true,
//       "format": "1190122"
//     },{
//       "name": "day",
//       "type": "String",
//       "default": "",
//       "details": "日期",
//       "required": true,
//       "format": "2020-01-14"
//     },
//     {
//       "name": "limit",
//       "type": "String",
//       "default": "10",
//       "details": "返回数量",
//       "required": false,
//       "format": "10"
//     },
//     {
//       "name": "offset",
//       "type": "String",
//       "default": "10",
//       "details": "偏移数量，用于分页 , 如 : 如 :( 页数 -1)*10, 其中 10 为 limit 的值",
//       "required": false,
//       "format": "0"
//     },
//     {
//       "name": "districtId",
//       "type": "String",
//       "default": "-1",
//       "details": "县区ID, 用于筛选影院",
//       "required": false,
//       "format": "-1"
//     },
//     {
//       "name": "areaId",
//       "type": "String",
//       "default": "-1",
//       "details": "商区ID, 用于筛选影院",
//       "required": false,
//       "format": "-1"
//     },
//     {
//       "name": "hallType",
//       "type": "String",
//       "default": "-1",
//       "details": "放映影厅ID, 用于筛选影院",
//       "required": false,
//       "format": "-1"
//     },
//     {
//       "name": "brandId",
//       "type": "String",
//       "default": "-1",
//       "details": "影院品牌ID, 用于筛选影院",
//       "required": false,
//       "format": "-1"
//     },
//     {
//       "name": "serviceId",
//       "type": "String",
//       "default": "-1",
//       "details": "影院服务ID, 用于筛选影院",
//       "required": false,
//       "format": "-1"
//     },
//     {
//       "name": "lineId",
//       "type": "String",
//       "default": "-1",
//       "details": "地铁线ID, 用于筛选影院",
//       "required": false,
//       "format": "-1"
//     },
//     {
//       "name": "stationId",
//       "type": "String",
//       "default": "-1",
//       "details": "地铁站ID, 用于筛选影院",
//       "required": false,
//       "format": "-1"
//     },
//     {
//       "name": "reqId",
//       "type": "String",
//       "default": "",
//       "details": "时间戳",
//       "required": true,
//       "format": "1579328443243"
//     },
//     {
//       "name": "cityId",
//       "type": "String",
//       "default": "",
//       "details": "城市id",
//       "required": true,
//       "format": "10"
//     },
//     {
//       "name": "optimus_uuid",
//       "type": "String",
//       "default": "",
//       "details": "城市id",
//       "required": true,
//       "format": "81816C30379C11EA866471AA6600D9F3FFCD3520A18D43F0B1C3B05472B68BB4"
//     }
//   ]
// }