var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", {
    useMongoClient: true
});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Google",
//         image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//         description: "Google is a company in CA."
//     },
//     function(error, item){
//         if(error){
//             console.log(error);
//         } else{
//             console.log("Good");
//             console.log(item);
//         }
//     });

//Campground.find();


// var campgrounds = [
//     {name: "Salmon Greek", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
//     {name: "Granite Hill", image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
//     {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg"},
//     {name: "Salmon Greek", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
//     {name: "Granite Hill", image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
//     {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg"},
//     {name: "Salmon Greek", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
//     {name: "Granite Hill", image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
//     {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2259/2182093741_164dc44a24.jpg"}
// ];
    
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(error, items){
        if(error){
            console.log(error);
        } else{
            res.render("index", {campgroundsEJS: items});
        }
    });
    // ---------------------- old ------------------------------
    // res.render("campgrounds", {campgroundsEJS: campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to compground array
    // redirect back to the campground page
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    Campground.create({
        name: name,
        image: image,
        description: desc
    },
    function(error, item){
        if(error){
            console.log(error);
        } else{
            res.redirect("/campgrounds");
        }
    });
    // ------------------- old ---------------------
    // campgrounds.push({name: name, image: image});
    // res.redirect("/campgrounds");
    // ---------------------------------------------
    
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

// Show more info about the Campground
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(error, item){
        if(error){
            console.log(error);
        } else{
            res.render("show", {showEJS: item});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is connected");
});