const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  const port = 3000

  server.get('/single/:title', (req, res) => {
    const actualPage = '/single'
    const queryParams = { title: req.params.title }

    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log(`> Ready Listening on Port ${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})