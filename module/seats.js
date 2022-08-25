module.exports = (query, request) => {
  query._log && console.log(`module[座位]: /seats  seqNo: 影院厅ID  ci: 城市ID\n`)
  let params = {
    seqNo: query.seqNo,
    fingerprint: '',
    ci: query.ci,
    channelId: 4,
    version_name: '2.0.0'
  }
  const token = query.cookie['token']
  const headers = {
    token,
    'X-Channel-ID': 4,
    'x-csrf-token': '',
    'X-Requested-With': 'ajax',
    'x-ta': 1,
    'Accept': 'application/json, text/plain, */*',
    Host: 'm.maoyan.com',
  }
  const data = {
    headers,
    cookie: query['cookie'],
    params,
    _log: query._log
  }
  return request(
    'POST', `https://m.maoyan.com/api/mtrade/seat/v8/show/seats.json?ts=${Date.now()}`, data
  )
}