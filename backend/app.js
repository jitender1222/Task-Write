
require('./Database/db').dbconnect();

const express=require("express");

const app=express();

const router=require('./Router/todoRouter');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// importing router which is an middlewear 

app.use(router);  // use is used when we have to access the middlewear

module.exports=app;