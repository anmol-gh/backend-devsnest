const express = require('express');

const app = express();

//CRUD || CREATE -> POST, READ -> GET, UPDATE -> PUT, DELETE -> DELETE

//Creating Routes
app.get('/',(req,res) =>{
    res.sendStatus(200).send("hi")
    res.send("hi")
})
app.listen(5000)
