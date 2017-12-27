var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var query = req.query.searchEJS;
    console.log(query);
    request("https://omdbapi.com/?s=" + query + "&apikey=thewdb", function(error, response, body){
        if(!error && response.statusCode == 200){
            var results = JSON.parse(body);
            // res.send(results["Search"][0]);
            res.render("results", {resultsEJS: results});
        }
    });
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!!!");
});