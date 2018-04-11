const express = require('express');

const app = express();
const mongoose = require('mongoose');

const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err) => {
  if (err) {
    console.log('Could Not Conntected to database', err);
  }else{
    console.log('Connected to database');
  }
});


app.get('/', (req,res)=>{
  res.send('Hello World');
});

app.listen(8080,()=>{
  console.log('Listen on port 8080');
});
