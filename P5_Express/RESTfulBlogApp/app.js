var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    app = express(),
    methodOverride = require("method-override");

mongoose.connect("mongodb://localhost/restful_blog_app", {useMongoClient: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);
// Blog.create({
//     title: "Test",
//     image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//     body: "Hello World!"
// });


// RESTFUL ROUTES
app.get("/", function(req, res){
    res.redirect("/blogs");
});
// INDEX ROUTE
app.get("/blogs", function(req, res){
    Blog.find({}, function(error, items){
        if(error){
            console.log(error);
        } else{
            res.render("index", {blogsInIndex: items});
        }
    })
});

// NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new");
});

// CREATE ROUTE
app.post("/blogs", function(req, res){
    Blog.create(req.body.blog, function(error, newBlog){
        if(error){
            res.render("new");
        } else{
            res.redirect("/blogs");
        }
    });
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(error, foundBlog){
        if(error){
            res.redirect("/blogs");
        } else{
            res.render("show", {blogInShow: foundBlog});
        }
    });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(error, foundBlog){
        if(error){
            res.redirect("/blogs");
        } else{
            res.render("edit", {blog: foundBlog}); 
        }
    });
});

// UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(error, foundBlog){
        if(error){
            res.redirect("/blogs");
        } else{
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(error, foundBlog){
        if(error){
            res.redirect("/blogs");
        } else{
            res.redirect("/blogs");
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is on!");
});