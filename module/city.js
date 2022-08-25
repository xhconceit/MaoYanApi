// 城市

module.exports = (query, request) => {
  query._log && console.log(`module[城市]: /city\n`)
  let data = {
    _log: query._log
  }
  return request(
    'GET', `http://m.maoyan.com/dianying/cities.json`, data
  )
}