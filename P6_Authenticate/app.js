var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    localStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

var app = express();

mongoose.connect("mongodb://localhost/auth_demo_app", {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

app.set("view engine", "ejs");

app.use(require("express-session")({
    secret: "I don't know.",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =======================================================
// ROUTE
// =======================================================

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

// =======================================================
// AUTH ROUTE
// =======================================================
// show sign up form
app.get("/register", function(req, res){
    res.render("register");
});
// handle user sign up
app.post("/register", function(req, res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(error, user){
        if(error) {
            console.log(error);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

// =======================================================
// LOGIN ROUTE
// =======================================================
app.get("/login", function(req, res){
    res.render("login");
});
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started.");
});