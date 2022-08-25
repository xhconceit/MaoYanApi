module.exports = (query, request) => {
  query._log && console.log(`module[电影列表]: /movie/list  movieIds: 电影id列表，以 , 隔开\n`)
  let params = {
    token: '',
    movieIds: query.movieIds, // movieIds : 电影 id 多个电影以 , 隔开
    optimus_risk_level: 71,
    optimus_code: 10
  }

  let data = {
    params,
    cookie: query['cookie'],
    _log: query._log
  }
  return request(
    'GET', `http://m.maoyan.com/ajax/moreComingList`, data
  )
}