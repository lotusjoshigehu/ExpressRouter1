const express=require('express')
const app=express()
const booksrouter=require('./routes1/books')

app.use('/books',booksrouter)



app.listen(4000,()=>
{
    console.log("server is running")
})





