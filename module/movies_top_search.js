// 搜索电影

module.exports = (query, request) => {
  let data = Object.assign({
    stype: -1
  }, query)
  return request(
    'GET', `http://m.maoyan.com/ajax/movies`, data, {}
  )
}


// ,
//     {
//       "name": "搜索电影",
//       "path": "/movies/top/search",
//       "file": "movies_top_search.js",
//       "method": "GET",
//       "explain": "调用此接口 ,搜索电影 ,该接口只返回前面几条数据",
//       "data": [
//         {
//           "name": "kw",
//           "type": "String",
//           "default": "",
//           "details": "关键词",
//           "required": true,
//           "format": "大话西游"
//         }
//       ]
//     }