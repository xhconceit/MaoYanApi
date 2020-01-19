//  影院详情
const common = require('../util/common')
module.exports = (query, request) => {
  let data = Object.assign({}, query, common)
  return request(
    'GET', `http://m.maoyan.com/ajax/cinemaDetail`, data, {}
  )
}

// cinemaId: 影院id
// movieId: 电影id
// optimus_uuid: uid

// {
//   "name": "影院详情",
//     "path": "/cinema/detail",
//       "file": "cinema_detail.js",
//         "method": "GET",
//           "data": [
//             {
//               "name": "movieId",
//               "type": "String",
//               "default": "",
//               "details": "影院id",
//               "required": false,
//               "format": "1190122"
//             },
//             {
//               "name": "cinemaId",
//               "type": "String",
//               "default": "",
//               "details": "影院id",
//               "required": true,
//               "format": "16097"
//             },
//             {
//               "name": "optimus_uuid",
//               "type": "String",
//               "default": "",
//               "details": "uID",
//               "required": true,
//               "format": "0EBC6C50362911EA9BE0C38C17C05E2EEA46F45F99614B618B06BBA29C86C236"
//             }
//           ]
// },