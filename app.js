let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
//const mongoUrl = "mongodb://localhost:27017"
const mongoUrl = "mongodb+srv://test:test@cluster0.8vlxh.mongodb.net/save?retryWrites=true&w=majority"
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const cors = require('cors')
let port = process.env.PORT || 8210;
var db;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

//get 
app.get('/',(req,res) => {
    res.send("Welcome to express")
})
//get user
app.get('/user',(req,res) => {
    db.collection('user').find().toArray((err,result)=>{
        if( err) throw err;
        res.send(result)
    })
})





MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log("Error While Connecting");
    db = client.db('save');
    app.listen(port,()=>{
        console.log(`listening on port no ${port}`)
    });
})


