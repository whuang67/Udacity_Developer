var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]},
    {usePushEach: true}
);
module.exports = mongoose.model("User", userSchema);