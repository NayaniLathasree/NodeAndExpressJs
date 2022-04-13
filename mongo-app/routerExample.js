const express = require( 'express' );
const app = express()
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('welcome to my world');
    res.end()
})

router.get('/get',(req,res)=>{
    res.send('Home page');
    res.end()
})

app.use('/',router)

app.listen(2000,()=>{
    console.log('Server listening port on 2000')
})