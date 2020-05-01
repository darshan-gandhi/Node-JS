const cluster = require('cluster')
const numCPUs = require('os').cpus().length

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`)

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
  })
} else {
  // call the worker function
  const express = require('express')

  const app = express()

  app.get('/', (req, res) => {
    res.status(200).json({
      hello: 'world'
    })
  })
  app.listen(3000)

  console.log(`Worker ${process.pid} started`)

  
}