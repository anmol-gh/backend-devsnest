const express = require("express");

const app = express();

//CRUD || CREATE -> POST, READ -> GET, UPDATE -> PUT, DELETE -> DELETE

//How to Create Routes?

// app.get('/',(req,res) =>{
//     res.sendStatus(200).send("hi")
//     res.send("hi")
// })
// app.listen(5000)

//Check Regex in url 

//: refers to variable 

app.get("/user/:userId/book/:bookId", (req, res) => {
console.log(req.query);
  res.send(req.params.bookId);
});

app.listen(5000);
