module.exports = (query, request) => {
  query._log && console.log(`module[影院播放电影列表]: /cinema/movies  ci: 城市id  cinemaId: 电影院id\n`)
  let params = {
    ci: query.ci, // 城市id
    cinemaId:query.cinemaId, // 电影院id
    channelId:4,
    optimus_risk_level: 71,
    optimus_code: 10
  }
  let data = {
    params,
    cookie: query['cookie'],
    _log: query._log
  }
  return request(
    'GET', `http://m.maoyan.com/mtrade/cinema/cinema/shows.json`, data
  )
}