//  近期最受期待
const common = require('../util/common')
module.exports = (query, request) => {
  let data = Object.assign({
    limit: 10,
    offset: 0
  }, query, common)
  return request(
    'GET', `http://m.maoyan.com/ajax/mostExpected`, data, {}
  )
}

// ci: 城市id
// limit : 返回数量 , 默认为 10
// offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*10, 其中 10 为 limit 的值 , 默认为 0
// optimus_uuid uid


// ,
//     {
//       "name": "近期最受期待",
//       "path": "/movie/coming",
//       "file": "movie_coming.js",
//       "method": "GET",
//       "data": [
//         {
//           "name": "ci",
//           "type": "String",
//           "default": "",
//           "details": "城市ID",
//           "required": true,
//           "format": "20"
//         },
//         {
//           "name": "limit",
//           "type": "String",
//           "default": "",
//           "details": "返回数量",
//           "required": false,
//           "format": "10"
//         },
//         {
//           "name": "offset",
//           "type": "String",
//           "default": "10",
//           "details": "偏移数量，用于分页 , 如 : 如 :( 页数 -1)*10, 其中 10 为 limit 的值",
//           "required": false,
//           "format": "0"
//         },
//         {
//           "name": "optimus_uuid",
//           "type": "String",
//           "default": "",
//           "details": "uID",
//           "required": true,
//           "format": "0EBC6C50362911EA9BE0C38C17C05E2EEA46F45F99614B618B06BBA29C86C236"
//         }
//       ]
//     }