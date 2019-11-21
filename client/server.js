const cacheableResponse = require('cacheable-response')
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60 * 24, // 1hour
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams),
  }),
  send: ({ data, res }) => res.send(data),
})

app.prepare().then(() => {
  const server = express()

  server.get('/article/:slug', (req, res) => {
    const queryParams = { slug: req.params.slug }
    const pagePath = '/article'
    return ssrCache({ req, res, pagePath, queryParams })
  })
  
  server.get('/author/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    const pagePath = '/author'
    return ssrCache({ req, res, pagePath, queryParams })
  })

  server.get('/category/:name', (req, res) => {
    return app.render(req, res, '/category', { name: req.params.name })
  })

  const sitemapOptions = {
    root: `${__dirname}/static/`,
    headers: {
      'Content-Type': 'text/xml;charset=UTF-8',
    },
  }

  server.get('/sitemap.xml', (req, res) => res.status(200).sendFile('sitemap.xml', sitemapOptions))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    // console.log(`> Ready on http://localhost:${port}`)
  })
})
