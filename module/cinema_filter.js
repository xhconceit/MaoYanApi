
//  影院筛选
module.exports = (query, request) => {
  query._log && console.log(`module[城市影院筛选]: /cinema/filter  ci: 城市id\n`)
  let params = {
    ci: query.ci,
    optimus_risk_level: 71,
    optimus_code: 10
  }
  let data = {
    params,
    cookie: query['cookie'],
    _log: query._log
  }
  return request(
    'GET', `http://m.maoyan.com/ajax/filterCinemas`, data
  )
}

