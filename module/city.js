// 城市

module.exports = (query, request) => {
  return request(
    'GET', `http://m.maoyan.com/dianying/cities.json`, {}, {}
  )
}

// ,
// {
//   "name": "城市",
//   "path": "/city",
//   "file": "city.js",
//   "method": "GET",
//   "data": []
// }