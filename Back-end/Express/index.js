const express  = require('express')
require('./config/db')
const productRoute  = require('./routes/product')
const app = express()
const port = 3000

//body parser  --- > Bult-in middleware
app.use(express.urlencoded({extended :true}))
app.use(express.json())

//route middleware
app.use('/products',productRoute)

//error-handling middleware

app.use((err,req,res,next)=>{
    res.status(500).json({
        error: true,
        message :err.message,
        data : null
    })
})

app.listen(port , ()=>{
    console.log(`Server is listening on ${port}`);
})
