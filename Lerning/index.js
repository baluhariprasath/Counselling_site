var express = require('express')

const app = express()

app.set('view engine','ejs')

const PORT = 4000

app.get('/',(req,res) => {
  res.render('index')
})

app.listen(PORT,() => {
  console.log("Your app is listening on port 4000")
})