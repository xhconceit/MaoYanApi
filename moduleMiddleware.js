

const modules = require('./main')
const fs = require('fs')
const path = require('path')
const { cookieParse, cookieStringify } = require('./util/index')
const ResultCode = require('./util/ResultCode')

/**
 * 外部 cookie 路径
 */


function moduleMiddleware(options = {}) {
  const cookiePath = path.resolve(__dirname, 'cookie.txt')

  return async (req, res, next) => {
    const { method, originalUrl, query } = req
    if (method === 'GET' || method === 'get') {
      const url = originalUrl.split('?')[0]
      const moduleKey = url.substr(1).replace(/\//g, '_')
      const modulesDefinition = modules[moduleKey]
      if (modulesDefinition) {
        query._log = options.log

        query._log && console.log('=========== ManYanApi ================')

        /// 本地 cookie
        /// 加载外面 cookie 文件
        let cookie = {}
        if (fs.existsSync(cookiePath)) {
          query._log && console.log(`加载本地 ${cookiePath}\n`)
          cookie = cookieParse(fs.readFileSync(cookiePath).toString().replace(/\n/g, ''))
        }
        // 处理 城市 id 名字 cookie
        if (query.ci && query.ct) {
          query._log && console.log('解析城市 id 和城市名称 cookie\n')
          Object.assign(cookie, {
            ci: encodeURIComponent(query.ci),
            ct: encodeURIComponent(query.ct)
          })
        }

        query['cookie'] = cookie
        const moduleRequest = await modulesDefinition(query)
        query._log && console.log('请求结束\n')
        req.dataName = 'maoyen'
        req.data = moduleRequest


        if (ResultCode.success.code === moduleRequest.code.code && fs.existsSync(cookiePath) && !!moduleRequest.cookie && Object.keys(moduleRequest.cookie).length > 0) {
          query._log && console.log('保存返回 cookie\n');
          const fsCookie = cookieParse(fs.readFileSync(cookiePath).toString().replace(/\n/g, ''))
          Object.assign(fsCookie, moduleRequest.cookie)
          fs.writeFileSync(cookiePath, cookieStringify(fsCookie))
        }
        if (query._log) {
          const url = `${req.headers.host}${decodeURIComponent(originalUrl)}`
          moduleRequest.code === ResultCode.success.code ?
            console.log(`请求成功: ${url}\n`) :
            console.log(`请求失败: [status:${moduleRequest.status}]: [code:${moduleRequest.code}]: ${url} : [file]: ${moduleKey}\n`)
        }
      }
    }
    next()
  }

}



module.exports = moduleMiddleware