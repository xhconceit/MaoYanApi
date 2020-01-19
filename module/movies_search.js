// 搜索电影

module.exports = (query, request) => {
  let data = Object.assign({
    offset: 1,
    limit: 10
  }, query)
  return request(
    'GET', `http://m.maoyan.com/searchlist/movies`, data, {}
  )
}

// ,
//     {
//       "name": "搜索电影",
//       "path": "/movies/search",
//       "file": "movies_search.js",
//       "method": "GET",
//       "explain": "调用此接口 ,搜索电影 ,该接口不可以返回第一条数据",
//       "data": [
//         {
//           "name": "kw",
//           "type": "String",
//           "default": "",
//           "details": "关键词",
//           "required": true,
//           "format": "大话西游"
//         },
//         {
//           "name": "limit",
//           "type": "String",
//           "default": "10",
//           "details": "返回数量",
//           "required": false,
//           "format": "10"
//         },
//         {
//           "name": "offset",
//           "type": "String",
//           "default": "10",
//           "details": "偏移数量，用于分页 , 如 : 如 :( 页数 -1)*10, 其中 10 为 limit 的值 ,该值不可以为 0",
//           "required": false,
//           "format": "0"
//         }
//       ]
//     }