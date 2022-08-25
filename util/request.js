
const axios = require('axios')
const { chooseUserAgent, cookieStringify, cookieParse, paramsStringify } = require('./index')
const ResultCode = require('./ResultCode')

/**
 * 配置
 */
axios.default.interceptors.request.use(config => {
  const cookie = config.headers.cookie
  // 判断是否配置是否有 cookie
  if (cookie && cookie['ci'] && cookie['ct']) {
    const { ci, ct } = cookie
    // 获取城市 id 名字
    cookie['ci'] = `${ci},${ct}`
  }
  // 将 cookie 对象转成 字符串
  config.headers.cookie = cookieStringify(config.headers.cookie)
  return config
})

/**
 * 
 * @param {string} method 请求方法
 * @param {string} url 请求路径
 * @param {object} data 请求数据 data headers params cookies
 * @returns 返回 Promise
 */
async function createRequest(method, url, data = {}, options = {}) {


  const headers = {
    cookie: data.cookie,
    'User-Agent': chooseUserAgent(),
    // 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    // 'sec-ch-ua':  '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
    // 'sec-ch-ua-platform': '"macOS"',
    ...data.headers
  }
  const settings = {
    method,
    url,
    headers: headers,
    params: data.params,
    data: data.data
  }
  data._log && console.log(`[开始请求: [${method}]]: ${url}${url.includes('?') ? '&' : '?'}${paramsStringify(data.params)}\n`)
  // 返回数据的 code
  const result = {}
  try {
    const response = await axios(settings)
    let RCode = ResultCode.success
    result.data = response.data
    // 解析返回的 cookie
    let cookie = {}
    if (response.headers['set-cookie'] && response.headers['set-cookie'].length > 0) {
      cookie = cookieParse(response.headers['set-cookie'])
    }
    // 返回数据类型
    let resultType = response.headers['content-type']
    if (resultType.includes('application/json')) {
      // json
      if (typeof(response.data) === 'string' || typeof (response.data['success']) === 'boolean' && !response.data['success']) {
        // 返回数据出错
        RCode = ResultCode.error
      }
    } else if (resultType.includes('text/html')) {
      // html
      if (options['ssr']) {
        // ssr  解析 html
        let data = response.data
        const patt =  /AppData\s*=([\d\D]*?);{0,1}\s*<\/script/.exec(data)
        if (!patt) {
          RCode = ResultCode.error
        } else {
          let dataJson = JSON.parse(patt[1])
          result.data = dataJson
        }
      } else {
        RCode = ResultCode.error
      }

    } else {
      // 其他
      RCode = ResultCode.rest
    }

    return {
      ...result,
      cookie,
      ...RCode
    }
  } catch (error) {

    // 请求失败
    result.code = ResultCode.noServer.code
    result.message = `${ResultCode.noServer.message}: ${error.message}`

  }


  return result

}



module.exports = createRequest