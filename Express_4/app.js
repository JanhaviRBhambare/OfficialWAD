const express=require('express'); //import express.js framework
const app=express();               //initialize express applicationn

app.get('/',(req,res) => {
    res.sendFile(__dirname+('/public/home.html'));
})

app.get('/about.html',(req,res) => {
    res.sendFile(__dirname+('/public/about.html'));
})

app.get('/user.html',(req,res) => {
    res.sendFile(__dirname+('/public/user.html'));
})
// Define Routes:
// When a GET request is made to '/', the server responds by sending the home.html file located in the public directory.
// When a GET request is made to '/about.html', the server responds by sending the about.html file located in the public directory.
// When a GET request is made to '/user.html', the server responds by sending the user.html file located in the public directory.
app.listen(5500);//start server