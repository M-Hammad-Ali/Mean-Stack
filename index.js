var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser')
var path = require('path');

var app = express();

//Requiring Routes
const route = require('./routes/route')

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/MEAN-Edureka')

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error'+err);
    }
})

mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @27017')
})



//port 
const port = 3100;

//Middleware for passing data
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static file
app.use(express.static(path.join(__dirname,'public')));


app.use('/api',route)

//testing server
app.get('/',(req,res,next)=>{
    res.send('footbar');
})

app.listen(port,()=>{
    console.log('Server started at port: '+port);
})