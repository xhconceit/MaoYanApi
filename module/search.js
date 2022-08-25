module.exports = (query, request) => {
  query._log && console.log(`module[搜索电影，影院]: /search  kw: 搜索内容  ci: 城市ID\n`)
  let params = {
    kw: query.kw,
    cityId: query.ci,
    stype: -1
  }

  let data = {
    params,
    cookie: query['cookie'],
    _log: query._log
  }
  return request(
    'GET', `https://i.maoyan.com/apollo/ajax/search`, data
  )
}