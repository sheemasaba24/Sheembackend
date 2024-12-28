require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Sheema!')
  })
  app.get('/msg', (req, res) => {
    res.send('<h1>WELCOME SHEEMS</h1>')
  })
app.get('/sheems',(req,res)=>{
    res.send('<h2>Hello sheema</h2>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})