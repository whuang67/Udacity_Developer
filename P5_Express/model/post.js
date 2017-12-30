var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model("Post", postSchema);