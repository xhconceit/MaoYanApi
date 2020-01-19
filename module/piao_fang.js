// 票房

module.exports = (query, request) => {
  let data = Object.assign({}, query)
  return request(
    'GET', `http://piaofang.maoyan.com/second-box`, data, {}
  )
}
  // beginDate 日期  日期格式 20200108

//   ,
// {
//   "name": "票房",
//   "path": "/piaofang",
//   "file": "piao_fang.js",
//   "method": "GET",
//   "data": [
//     {
//       "name": "beginDate",
//       "type": "String",
//       "default": "",
//       "details": "日期",
//       "required": false,
//       "format": "20200108"
//     }
//   ]
// }