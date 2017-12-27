var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("homepage");
    // res.send("<h1>Welcome to the homepage!</h1><h2>Blah blah</h2>");
});

app.get("/fallinlovewith/:animal", function(req, res){
    var animal = req.params.animal;
    res.render("love", {animalVariable: animal});
    // res.send("You fell in love with " + animal);
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Wenke"},
    ];
    res.render("posts", {posts: posts});
});





app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!!!");
});