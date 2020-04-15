const express = require('express')
const app = express();
const bodyParser = require('body-parser')
var path = require('path')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/first.html'))
})

app.post('/new-word',(req,res)=>{
    let term = req.body.search
    res.redirect(`https://www.google.com/search?q=google+dictionary&dobs=${term}`)
})

app.listen(8000,()=>{
    console.log('Server is listening...')
})