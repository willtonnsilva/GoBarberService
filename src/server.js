const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('connect-flash')

class App {
  constructor () {
    this.express = express()
    // eslint-disable-next-line semi
    this.isDev = process.env.NODE_ENV !== 'production';

    this.middlewares()
    this.views()
    this.routes()
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(flash())
    this.express.use(
      session({
        name: 'root',
        secret: 'MyAppSecret',
        resave: false,
        store: new FileStore({
          path: path.resolve(__dirname, '..', 'tmp', 'session')
        }),
        saveUninitialized: false
      })
    )
  }

  views () {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      autoescape: true,
      express: this.express
    })

    this.express.use(express.static(path.resolve(__dirname, 'public')))
    this.express.set('view engine', 'njk')
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
