/**
 * 解析 cookie 返回对象
 * @param {string | Array} cookies cookie 文本
 * @returns object
 */
function cookieParse(cookie) {
  let cookies = []
  if (cookie instanceof Array) {
    cookies = cookie.map(v => v.split(';')[0])
  }
  if (typeof(cookie) === 'string') {
    cookies = cookie.split(';').map(v=>v.trim())
  }
  const cookieObj = {}
  
  cookies.forEach((cookie) => {
    let strs = cookie.split('=')
    const key = strs[0].trim()
    cookieObj[key] = strs.slice(1).join('=')
  })
  return cookieObj
}

/**
 * 将对象转成 cookie
 * @param { object } cookieObj cookie 对象
 * @returns string
 */
function cookieStringify(cookieObj) {
  let cookies = []
  for (const key in cookieObj) {
    if (Object.prototype.hasOwnProperty.call(cookieObj, key)) {
      const value = cookieObj[key];
      cookies.push(`${key}=${value}`)
    }
  }
  return cookies.join('; ')
}
/**
 * 随机选择一个 user-agent 请求头
 * @returns string
 */
function chooseUserAgent() {
  const userAgentList = [
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89;GameHelper',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1',
    'Mozilla/5.0 (iPad; CPU OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:46.0) Gecko/20100101 Firefox/46.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:46.0) Gecko/20100101 Firefox/46.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/13.10586'
  ]
  return userAgentList[Math.floor(Math.random() * userAgentList.length)]
}

/**
 * 将参数对象转成字符串
 * @param {object} params 参数对象
 * @returns 字符串参数
 */
function paramsStringify(params={}) {
  let keys = Object.keys(params)
  return keys.map(k=>`${k}=${params[k]}`).join('&')
}

module.exports = {
  cookieParse,
  cookieStringify,
  chooseUserAgent,
  paramsStringify
}