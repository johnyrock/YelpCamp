var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

// INDEX
router.get("/", function(req, res){
    Campground.find({}, function(err, campgrounds){
        if(err){
            req.flash("error", "Something went wrong: "+err.message);
            // console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: campgrounds, currentUser: req.user});
        }
    });
});

// CREATE
router.post("/", middleware.isLoggedIn, function(req, res){
    var name = req.body.newCampName;
    var image = req.body.newCampImage;
    var desc = req.body.newCampDescription;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = {name: name, image: image, description: desc, author: author};
    Campground.create(newCampground, function(err, newCampground){
        if (err){
            // console.log(err);
            req.flash("error", "Something went wrong: "+err.message);
        } else {
            console.log(newCampground);
            res.redirect("/campgrounds");
        }
    });
});

// NEW
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

// SHOW
router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            // console.log(err);
            req.flash("error", "Something went wrong: "+err.message);
        } else {
            console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// EDIT
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// UPDATE
router.put("/:id", function(req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            req.flash("error", "Something went wrong: "+err.message);
            // console.log(err);
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds/"+req.params.id);
        }
    });
});

// DESTROY
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            req.flash("error", "Something went wrong: "+err.message);
            // console.log(err);
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;