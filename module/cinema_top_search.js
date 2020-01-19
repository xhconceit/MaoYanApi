// 搜索影院

module.exports = (query, request) => {
  let data = Object.assign({
    stype: 2
  }, query)
  return request(
    'GET', `http://m.maoyan.com/ajax/cinemas`, data, {}
  )
}

// ,
//     {
//       "name": "搜索影院",
//       "path": "/cinema/top/search",
//       "file": "cinema_top_search.js",
//       "method": "GET",
//       "explain": "调用此接口 ,搜索影院 ,该接口只返回前面几条数据",
//       "data": [
//         {
//           "name": "kw",
//           "type": "String",
//           "default": "",
//           "details": "关键词",
//           "required": true,
//           "format": "万达广场"
//         }
//       ]
//     }