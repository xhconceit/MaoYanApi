//  影院筛选
const common = require('../util/common')
module.exports = (query, request) => {
  let data = Object.assign({}, query, common)
  return request(
    'GET', `http://m.maoyan.com/ajax/filterCinemas`, data, {}
  )
}
//  城市影院筛选
// ci: 92
// optimus_uuid: 

//电影影院筛选
// movieId: 电影id
// day: 日期

