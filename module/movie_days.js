module.exports = (query, request) => {
  query._log && console.log(`module[电影放映日期]: /movie/days  ci: 城市id  movieId: 电影id\n`)
  let params = {
    channelId: 4,
    cityId: query.ci,
    movieId: query.movieId // 电影id
  }
  let data = {
    params,
    cookie: query['cookie'],
    _log: query._log
  }
  return request(
    'GET', `http://m.maoyan.com/api/mtrade/mmcs/show/v1/movie/showdays.json`, data
  )
}