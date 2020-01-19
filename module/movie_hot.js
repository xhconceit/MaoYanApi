//  热映
const common = require('../util/common')
module.exports = (query, request) => {
  let data = Object.assign({}, query, common)
  return request(
    'GET', `http://m.maoyan.com/ajax/movieOnInfoList`, data, {}
  )
}
// ci:20  城市
// optimus_uuid: uuid

// ,
//     {
//       "name": "热映",
//       "path": "/movie/hot",
//       "file": "movie_hot.js",
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
//           "name": "optimus_uuid",
//           "type": "String",
//           "default": "",
//           "details": "uID",
//           "required": true,
//           "format": "0EBC6C50362911EA9BE0C38C17C05E2EEA46F45F99614B618B06BBA29C86C236"
//         }
//       ]
//     }