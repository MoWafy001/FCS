var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var cors = require("cors");
app.use(cors());

app.use(express.static('website'));

app.listen(3000,()=>{
    console.log("running");
})