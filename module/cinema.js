module.exports = (query, request) => {
  query._log && console.log(`module[影院详情]: /cinema  cinemaId: 电影院id\n`)
  let params = {
    cinemaId:query.cinemaId
  }
  let data = {
    params,
    cookie: query['cookie'],
    _log: query._log
  }
  return request(
    'GET', `http://m.maoyan.com/api/mtrade/mmcs/cinema/v1/cinema.json`, data
  )
}