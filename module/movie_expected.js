module.exports = (query, request) => {
  query._log && console.log(`module[近期最受期待]: /movie/detail  limit?: 返回数量，默认:10  offset?: 偏移量，默认:0\n`)
  let params = {
    token: '',
    limit: query.limit || 10,
    offset: query.offset || 0
  }

  const data = {
    params,
    cookie: query['cookie'],
    _log: query._log
  }

  return request(
    'GET', `https://i.maoyan.com/ajax/mostExpected`, data
  )
}
