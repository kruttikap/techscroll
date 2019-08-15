const express = require('express')
const mongoose = require('mongoose');
const News = require('./Model/news')
const app = express()
const port = 3000;

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
    
    
    res.send('Hello world!');
    console.log('hello');
})


mongoose.connect('mongodb+srv://sai:saiteja@hackernews-8kxm3.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser : true},() => {
    console.log('database connected');
});

app.post('/register', (req, res) => {
    // console.log("fndksjfn", News)
    const {title, url, id} = req.body;
    // console.log("fdsfs", req.body)
    const article = new News({
        title,
        url,
        id
    }).save()
    .then(news => {
        // console.log("news");
        res.json(news)
    })
    .catch(err => {
        // console.log("erere", err)
        res.json(err)
    })
});

app.listen(port)
