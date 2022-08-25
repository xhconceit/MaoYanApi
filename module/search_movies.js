module.exports = (query, request) => {
  query._log && console.log(`module[搜索电影]: /search  kw: 搜索内容  ci: 城市ID  offset?: 偏移量默认 1，偏移量不可以为 0 ，0 返回 html,  limit?: 返回数量\n`)
  let params = {
    keyword: query.kw,
    ci: query.ci,
    offset: query.offset || 1,
    limit: query.limit || 20
  }

  let data = {
    params,
    cookie: query['cookie'],
    _log: query._log
  }
  return request(
    'GET', `https://m.maoyan.com/searchlist/movies`, data
  )
}