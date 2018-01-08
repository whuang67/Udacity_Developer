var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo", {
    useMongoClient: true
});

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
},
{usePushEach: true});
var User = mongoose.model("User", userSchema);

// User.create({
//     email: "nate@archibald.com",
//     name: "Nate Archibald"
// });

// Post.create({
//     title: "NY spectator",
//     content: "I am the mayor!"
// }, function(error, post){
//     console.log(post);
// });

// Post.create({
//     title: "How to cook?",
//     content: "I have no idea."
// }, function(error, post){
//     if(error){
//         console.log(error);
//     } else{
//         User.findOne({email: "nate@archibald.com"},
//         function(error, foundUser){
//             if(error){
//                 console.log(error);
//             } else{
//                 foundUser.posts.push(post);
//                 foundUser.save(function(error, data){
//                     if(error){
//                         console.log(error);
//                     } else{
//                         console.log(data);
//                     }
//                 });
//             }
//         });
//     }
// });


User.findOne({email: "nate@archibald.com"}).populate("posts").exec(function(error, user){
    if(error){
        console.log(error);
    } else{
        console.log(user);
    }
});
