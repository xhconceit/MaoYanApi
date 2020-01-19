//  座位
const common = require('../util/common')
module.exports = (query, request) => {
  let data = Object.assign({}, query, common)
  return request(
    'POST', `http://m.maoyan.com/ajax/seatingPlan?timestamp=${Date.now()}`, data, {}
  )
}

// cityId: 20城市id
// ci: 20城市id
// seqNo : 电影影院id
// optimus_uuid: uid

// ,
//     {
//       "name": "选择座位",
//       "path": "/seating",
//       "file": "seating.js",
//       "method": "GET",
//       "data": [
//         {
//           "name": "cityId",
//           "type": "String",
//           "default": "",
//           "details": "城市ID",
//           "required": true,
//           "format": "20"
//         },
//         {
//           "name": "ci",
//           "type": "String",
//           "default": "",
//           "details": "城市ID",
//           "required": true,
//           "format": "20"
//         },
//         {
//           "name": "seqNo",
//           "type": "String",
//           "default": "",
//           "details": "电影影院id",
//           "required": true,
//           "format": "202001140398521"
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