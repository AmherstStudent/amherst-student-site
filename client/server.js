const express = require('express')
const next = require('next')
const port = process.env.PORT || 8000;
const ROOT_URL = process.env.ROOT_URL || `http://localhost:${port}`;

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.get('/article/:slug', (req, res) => {
    const actualPage = '/article'
    const queryParams = {title: req.params.slug}
    console.log("Word")
    app.render(req, res, actualPage, queryParams)
  })
  // TODO: ADD LINK TO CATEGORY
  // server.get('/:category', (req, res) => {
  //   const actualPage = '/article'
  //   console.log('Words')
  //   const queryParams = {title: req.params.slug}
  //   app.render(req, res, actualPage, queryParams)
  // }



  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})