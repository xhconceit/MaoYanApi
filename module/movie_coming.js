//  即将上映
const common = require('../util/common')
module.exports = (query, request) => {
  let data = Object.assign({
    limit: 10
  }, query, common)
  return request(
    'GET', `http://m.maoyan.com/ajax/comingList`, data, {}
  )
}

// ci: 城市id
// limit : 返回数量 , 默认为 10
// optimus_uuid: uid

// ,
//     {
//       "name": "即将上映",
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
//         },{
//           "name": "limit",
//           "type": "String",
//           "default": "",
//           "details": "返回数量",
//           "required": false,
//           "format": "10"
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