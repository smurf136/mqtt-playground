var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost', {port: 8080, protocol: 'ws'})

client.on('connect', function () {
    console.log('CONNECTED')
    client.subscribe('Chat', function (err) {
    // if (!err) {
    //   client.publish('presence', 'Hello mqtt')
    // }
    })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
//   client.end()
})

const express = require('express')
const app = express()
const port = 3000

app.get('/:message', (req, res) => {
  client.publish('Chat', req.params.message)
  res.send('');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})