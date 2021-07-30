//jhint esversion: 6
const express = require("express")
const bodyParser = require("body-parser")
var rn = require('random-number');
const crypto = require("crypto");

const { text } = require("body-parser")

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req,res){
    var c1 = req.body.sps
    var c2 = ""
    var rno = Math.floor(Math.random() * 3);
    if(rno == 1){
        c2 = "r"
    } else if(rno == 2){
        c2 = "p"
    } else{
        c2 = "s"
    }

    if (c1 == c2 || c1 == 'R' && c2 == 'r' || c1 == 'r' && c2 == 'R' || c1 == 'S' && c2 == 's' || c1 == 's' && c2 == 'S' || c1 == 'P' && c2 == 'p' || c1 == 'p' && c2 == 'P')
    {
        res.write("TIED!!!!!")
    }
    else if (c1 == 'r' && c2 == 's' || c1 == 'R' && c2 == 's')
    {
        res.write("Player wins!!!!!")
    }
    else if (c2 == 'r' && c1 == 's' || c2 == 'r' && c1 == 'S')
    {
        res.write("Computer wins!!!!!")
    }
    else if (c1 == 'p' && c2 == 'r' || c1 == 'P' && c2 == 'r')
    {
        res.write("Player wins!!!!!")
    }
    else if (c2 == 'p' && c1 == 'r' || c2 == 'p' && c1 == 'R')
    {
        res.write("Computer wins!!!!!")
    }
    else if (c1 == 's' && c2 == 'p' || c1 == 'S' && c2 == 'p')
    {
        res.write("Player wins!!!!!")
    }
    else if (c2 == 's' && c1 == 'p' || c2 == 's' && c1 == 'P')
    {
        res.write("Computer wins!!!!!")
    }
    else{
        res.write("Error!" + " Please enter correct option" + "\nYou have entered " + c1)
    }
    // console.log(rno);
    res.send()
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000");
})