const express = require('express')

const app = express()

app.set('view engine', 'ejs')

var a=10
var b=20
var c=a+b

app.get('/', (req,res)=>{
    res.render('index',{title: c,message: c})
})

app.listen(3200)

