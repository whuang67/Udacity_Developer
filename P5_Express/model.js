var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo", {
    useMongoClient: true
});

// POST - title, content
// see model/post.js
var Post = require("./model/post.js");

// USER - email, name
var User = require("./model/user.js");


Post.create({
    title: "How to cook?",
    content: "I have no idea."
}, function(error, post){
    if(error){
        console.log(error);
    } else{
        User.findOne({email: "nate@archibald.com"},
        function(error, foundUser){
            if(error){
                console.log(error);
            } else{
                foundUser.posts.push(post);
                foundUser.save(function(error, data){
                    if(error){
                        console.log(error);
                    } else{
                        console.log(data);
                    }
                });
            }
        });
    }
});