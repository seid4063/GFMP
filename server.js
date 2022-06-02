const express=require('express');
//const dotenv=require('dotenv');
const morgan=require('morgan');
const body=require("body-parser");
 const path=require("path");
 //const path=require('path')

const app= express();

//dotenv.config({path:'config.env'})
//const PORT=process.env.PORT||8080

//log request
app.use(morgan('tiny'));
//parse request to body parser
app.use(body.urlencoded({extended:true}))
//set view engine 
app.set("view engine","ejs")
//app.set("views",path.resolve{----dirname,"views/esj"})


//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))



app.get('/',(req,res)=>{
res.render('index');
});

app.get('/add-user',(req,res)=>{
    res.render('add_user');
    });
    

app.listen( 8080,()=>{console.log('server is running on http://localhost:8080')});