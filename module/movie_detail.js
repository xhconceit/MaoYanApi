//  电影详情
const common = require('../util/common')
module.exports = (query, request) => {
  let data = Object.assign({}, query, common)
  return request(
    'GET', `http://m.maoyan.com/ajax/detailmovie`, data, {}
  )
}

// movieId: movie id
// optimus_uuid:uid

// ,
//     {
//       "name": "电影详情",
//       "path": "/movie/detail",
//       "file": "movie_detail.js",
//       "method": "GET",
//       "data": [
//         {
//           "name": "movieId",
//           "type": "String",
//           "default": "",
//           "details": "电影ID",
//           "required": true,
//           "format": "1190122"
//         },{
//           "name": "optimus_uuid",
//           "type": "String",
//           "default": "",
//           "details": "uID",
//           "required": true,
//           "format": "0EBC6C50362911EA9BE0C38C17C05E2EEA46F45F99614B618B06BBA29C86C236"
//         }
//       ]
//     }