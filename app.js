const express = require('express')
const app = express()
let bodyParser = require('body-parser')

const path = require('path')
const Calculator=require('./calculator.js')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('../public'));

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

const PORT = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/result',(req,res)=>{
    var n1 = parseInt(req.body.num1)
    var n2 = parseInt(req.body.num2)

    let adds = new Calculator(n1,n2)
    let products = new Calculator(n1,n2)
   if(req.body.add){
       res.send(adds.add)
   }else if (req.body.product){
       res.send(products.product)
   }
})


app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})