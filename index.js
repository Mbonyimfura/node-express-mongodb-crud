require('./model/db')
const bodyParser = require('body-parser')
const path=require('path')
const express=require('express')
const app=express()
app.use(bodyParser.urlencoded({
    extended:true
}
   
))
const publicPathDirectory=path.join(__dirname,'/views/')
app.set('view engine','hbs',{defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' })
app.use(express.static(publicPathDirectory))
app.get('/',(req,res)=>{
    res.render('index')
})
const router=require('./router/employ')

const port=process.env.Port||5000


app.use('/employee',router)
app.listen(port,()=>{
    console.log(`the server is starting up on ${port} port`)
})