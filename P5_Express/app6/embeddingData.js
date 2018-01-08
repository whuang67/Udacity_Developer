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
    posts: [postSchema]},
    {usePushEach: true}
);
var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email: "charlie@brown.edu",
//     name: "Charlie Brown"
// });
// newUser.save(function(error, user){
//     if(error){
//         console.log(error);
//     } else{
//         console.log(user);
//     }
// });


// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious."
// });
// newPost.save(function(error, post){
//     if(error){
//         console.log(error);
//     } else{
//         console.log(post);
//     }
// });


// var newUser = new User({
//     email: "chuck@bass.com",
//     name: "Chuck Bass"
// });
// newUser.posts.push({
//     title: "How to cook?",
//     content: "You can keep trying."
// });
// newUser.save(function(error, user){
//     if(error){
//         console.log(error);
//     } else{
//         console.log(user);
//     }
// });


User.findOne({name: "Charlie Brown"}, function(error, user){
    if(error){
        console.log(error);
    } else{
        user.posts.push({
            title: "Who are you?",
            content: "I'm Chuck Bass."
        });
        user.save(function(error, user){
            if(error){
                console.log(error);
            } else{
                console.log(user);
            }
        });
    }
});
