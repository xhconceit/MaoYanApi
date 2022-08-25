const moment = require('moment')
module.exports = (query, request) => {
  query._log && console.log(`module[电影筛选影院]: /movie/detail  ci: 城市id  movieId: 电影id  showDate?: 日期，格式 YYYY-MM-DD 默认今天\n`)
  let params = {
    channelId: 4,
    cityId: query.ci,
    movieId: query.movieId,
    showDate: query.showDate || moment().format('YYYY-MM-DD')
  }
  let data = {
    params,
    cookie: query['cookie'],
    _log: query._log
  }
  return request(
    'GET', `http://m.maoyan.com/api/mtrade/mmcs/cinema/v1/select/movie/items.json`, data
  )
}