module.exports = (query, request) => {
  query._log && console.log(`module[热映电影]: /movie/hot  ci: 城市id  ct: 城市名字\n`)
  const params = {
    ci: query.ci, // 城市id
    ct: query.ct  // 城市名字
  }
  let data ={
    params,
    cookie: query.cookie,
    _log: query._log
  }

  return request(
    'GET', `http://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?channelId=4`, data
  )
}