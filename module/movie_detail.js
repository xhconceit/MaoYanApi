module.exports = (query, request) => {
  query._log && console.log(`module[电影详情]: /movie/detail  movieId: 电影id\n`)
  let params = {
    movieId: query.movieId // 电影id
  }
  let data = {
    params,
    cookie: query['cookie'],
    _log: query._log
  }
  return request(
    'GET', `http://i.maoyan.com/ajax/detailmovie`, data
  )
}