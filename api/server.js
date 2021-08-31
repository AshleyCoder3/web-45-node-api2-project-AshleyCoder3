// implement your server here
const express = require('express')
// require your posts router and connect it here
//links
const postRouter = require('./posts/posts-router')
//using?
const server = express()
server.use(express.json())
server.use('/api/posts', postRouter)

server.get('/', (req, res) => {
  res.send(`
      <h2>Lambda Blog API</h>
      <p>Welcome to the Lambda Blog API</p>
    `)
})

//export
module.exports = server
