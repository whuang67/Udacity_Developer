var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Greek", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
    {name: "Granite Hill", image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg"},
    {name: "Salmon Greek", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
    {name: "Granite Hill", image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg"},
    {name: "Salmon Greek", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
    {name: "Granite Hill", image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg"}
];
    
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgroundsEJS: campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to compground array
    // redirect back to the campground page
    var name = req.body.name;
    var image = req.body.image;
    campgrounds.push({name: name, image: image});
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is connected");
});