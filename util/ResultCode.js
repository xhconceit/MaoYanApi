/**
 * 返回数据类型
 */
 const ResultCode = {
  success : {
    code: 0,
    message: '获取数据成功'
  },
  error : {
    code: 1,
    message: '请求数据失败'
  },
  rest: {
    code: 2,
    message: '奇怪的问题'
  },
  noServer : {
    code: 3,
    message: '配置或者解析数据出错'
  },

}
module.exports = ResultCode