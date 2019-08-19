const express = require('express')
const mongoose = require('mongoose')
const app = express();
const news = require('./Model/news')
const db = require('./config/keys').db;
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.urlencoded({
    extended : true
}))
app.use(express.json())

//model

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('hello');
})  

  
app.get('/getnews', (req, res) => {
    
    news.find().then(post=>{
        if(!post){
           return res.status(404).json({
               nopost:"no post found"

            })
             
        }
        res.json(post)
    
    })
    
    //console.log('Hello');
    
})

mongoose.connect(db,{useNewUrlParser:true},() => {

     
    console.log('database connected');
});

app.post('/register', (req, res) => {
    const {title,url} = req.body;
    const news = new News({
        title,
        url
})     

.save()
    .then(news => {
        res.json(news)
    })
    .catch(err => {
        res.json(err)
    })
});
const port =3000;
app.listen(port)
