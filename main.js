const fs = require('fs')
const path = require('path')
const request = require('./util/request')

/**
 * 请求猫眼数据接口方法
 */
let obj = {}
fs.readdirSync(path.join(__dirname, 'module'))
  .reverse()
  .forEach((file) => {
    if (!file.endsWith('.js')) return
    let fileModule = require(path.join(__dirname, 'module', file))
    let fn = file.split('.').shift() || ''

    // modules 方法
    obj[fn] = function (data) {
      return fileModule(
        data,
        request,
      )
    }
  })

module.exports = obj