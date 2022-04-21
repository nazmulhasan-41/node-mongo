var express = require('express')
var app = express()


app.get('/',  (req, res)=> {
    res.send('hello world')
  })
  
  app.listen(3000, ()=> console.log('port 3000 is connected'))

