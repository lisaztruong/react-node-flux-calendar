var express = require('express');
var path = require('path');

var App=require('./react/App.js');
var React=require('react');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Render React on Server
app.get('/',function(req,res){
    var markup=React.renderComponentToString(App());
    res.send('<!DOCTYPE html>'+markup);
});


module.exports = app;
