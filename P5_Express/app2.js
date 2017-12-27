var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

// --------------------------------------------------------

app.get("/speak/:animal", function(req, res){
    var sound = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!"
    }
    var animal = req.params.animal;
    var sound = sound[animal];
    res.send("The " + animal + " says " + sound);
});

// --------------------------------------------------------

function repeat(str, num){
    var output = "";
    for(var i = 0; i < num; i++){
        output += " " + str;
    }
    return output;
}
app.get("/repeat/:string/:number", function(req, res){
    var inputs = req.params;
    var output = repeat(inputs.string, Number(inputs.number));
    res.send(output);
});



app.get("*", function(req, res){
    res.send("Sorry, page not found");
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Service has started!!!");
});
