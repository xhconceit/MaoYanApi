const express = require('express')
const moduleMiddleware = require('./moduleMiddleware')

function createServer(options = {}) {
  const port = Number(options.port || process.env.PORT || '3000')
  const host = options.host || process.env.HOST || ''
  const app = express()
  app.use(moduleMiddleware({
    log: true
  }))

  app.get('*', function (req, res) {
    if (req.dataName !== 'maoyen') {
      res.send('Hello World!')
    } else {
      res.json(req.data)
    }
  })

  app.listen(port, host, () => {
    console.log(`server running @ http://${host ? host : 'localhost'}:${port}`)
  })
  return app
}


module.exports = createServer