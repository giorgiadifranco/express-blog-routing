const express = require ('express');
const app = express()
const postsRicette = require('./db/db.js')

const HOST = process.env.HOST
const PORT = process.env.PORT

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at ${HOST}:${PORT}`);
})  

//creazione della rotta
app.get('/',(req, res)=>{

    res.send('Le mie ricette')
})

// seconda rotta -- response con formato json
const posts = require ('./db/db.js')
app.get('/posts', (req, res)=>{
    res.json({
        data: posts,
        counter: posts.length
    })
})