const moment = require('moment')
module.exports = (query, request) => {
  query._log && console.log(`module[影院列表]: /cinemas  ${
    [
      'ci: 城市id',
      'showDate?: 日期，默认今天',
      'offset?: 偏移量，默认0',
      'limit?: 返回数量，默认20',
      'districtId?:区号，默认-1',
      'lineId?: 地铁线，默认-1',
      'hallType?: 影厅类型，默认-1',
      'brandId?: 影城，默认-1',
      'serviceId?: 影城服务，1改签，2退票',
      'areaId?: 区域，默认-1',
      'stationId?: 地铁站，-1'
    ].join('  ')
  }\n`)
  let params = {
    movieId: 0,
    ci: query.ci,
    showDate: query.showDate||moment().format('YYYY-MM-DD'),
    offset: query.offset || 0,
    limit: query.limit || 20,
    districtId:-1,// 区号
    lineId:-1,//地铁线
    hallType:-1,//影厅类型
    brandId:-1,// 影城 id
    serviceId:-1,//影院服务  1改签 2退票
    areaId:-1,//区域id
    stationId:-1,//地铁站id
    item:'',
    optimus_risk_level: 71,
    optimus_code: 10
  }
  let data = {
    params,
    cookie: query['cookie'],
    _log: query._log

  }
  return request(
    'GET', `http://m.maoyan.com/ajax/cinemaList`, data, {}
  )
}