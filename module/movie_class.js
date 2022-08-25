//  
module.exports = (query, request) => {
  query._log && console.log(`module[电影分类]: /movie/class  ${
    [
      'sortId?: 排序id默认，1，1:热门排序，2:时间排序，3:评价排序',
      'showType: 电影类型id默认，3，1:正在热映，2:即将上映，3:经典影片',
      'limit: 返回数量，默认，10',
      'offset: 偏移量，默认，0'
    ].join('  ')
  }\n`)
  let params = {
    sortId: query.sortId || 1,// 排序 id 1:热门排序  2:时间排序  3:评价排序
    showType: query.showType || 3, //1 :正在热映 2:即将上映 3:经典影片
    limit: query.limit || 10,//返回数量 , 默认为 10
    offset: query.offset || 0,//偏移数量，用于分页 , 如 :( 页数 -1)*10, 其中 10 为 limit 的值 , 默认为 0
    optimus_risk_level: 71,
    optimus_code: 10
  }
  let data = {
    params,
    cookie: query['cookie'],
    _log: query._log
  }
  return request(
    'GET', `https://i.maoyan.com/ajax/moreClassicList`, data
  )
}