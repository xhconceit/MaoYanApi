
//  影院筛选
module.exports = (query, request) => {
  query._log && console.log(`module[明星详情]: /celebrity  id: 明星id\n`)
  let data = {
    params:{},
    cookie: query['cookie'],
    _log: query._log
  }
  return request(
    'GET', `https://m.maoyan.com/asgard/celebrity/${query.id}`, data, {
      ssr: true
    }
  )
}


