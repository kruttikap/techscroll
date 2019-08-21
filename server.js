const express = require('express')
const mongoose = require('mongoose')
const app = express();
const News = require('./Model/news')
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
    
    News.find().then(post=>{
        if(!post){
           return res.status(404).json({
               nopost:"no post found"

            })
             
        }
        console.log(post)
        res.json(post)
    
    })
    
    //console.log('Hello');
    
})

mongoose.connect(db,{useNewUrlParser:true},() => {

     
    console.log('database connected');
});

app.post('/register', (req, res) => {
    const {title,url} = req.body;
    console.log(title, url)
    const news = new News({
        title : title,
        url : url
})     

.save()
    .then(news => {
        res.json(news)
    })
    .catch(err => {
        res.json(err)
    })
});

app.get('/old_posts', (req, res) => {
    
    News.find({
        timestamp: {
            $gte: new Date(new Date() -  60 * 60  * 1000)
        }
    }).then(post=>{
        if(!post){
           return res.status(404).json({
               nopost:"no post found"

            })
             
        }
        res.json(post)
    
    })

   //news.find({
   //     timestamp: {
   //         $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000)
    //    }
   // });
    
    //console.log('Hello');
    
})

const port =3000;
app.listen(port)