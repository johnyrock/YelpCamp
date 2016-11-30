var mongoose = require("mongoose");
var Campground = require("./models/campground");
 var Comment = require("./models/comment");

var data = [
    {
        name: "Tanay Adventure Camp",
        image: "https://i.ytimg.com/vi/0C3-YAmp264/maxresdefault.jpg",
        description: "Bacon ipsum dolor amet pork burgdoggen fatback beef alcatra jowl pork chop capicola. Pork pig porchetta burgdoggen, tail kevin jerky alcatra landjaeger ham hock boudin short loin tenderloin. Short ribs prosciutto pancetta beef turkey, tenderloin turducken. Filet mignon meatloaf fatback turducken chicken. Flank venison salami prosciutto, kevin capicola beef tail tenderloin. Corned beef tail shank shoulder kevin kielbasa."
    },
    {
        name: "Mount Batulao",
        image: "http://2.bp.blogspot.com/-iZPcJQ0v12g/VPyCqiaxUPI/AAAAAAAANNQ/0COFea9xlFc/s1600/1.jpg",
        description: "Bacon ipsum dolor amet pork burgdoggen fatback beef alcatra jowl pork chop capicola. Pork pig porchetta burgdoggen, tail kevin jerky alcatra landjaeger ham hock boudin short loin tenderloin. Short ribs prosciutto pancetta beef turkey, tenderloin turducken. Filet mignon meatloaf fatback turducken chicken. Flank venison salami prosciutto, kevin capicola beef tail tenderloin. Corned beef tail shank shoulder kevin kielbasa."
    },
    {
        name: "Timberland Bike Trail",
        image: "http://3.bp.blogspot.com/-VJwW_iPdvmc/VILhX7V7EtI/AAAAAAAAZcU/0htA-SuIZfM/s1600/001.jpg",
        description: "Bacon ipsum dolor amet pork burgdoggen fatback beef alcatra jowl pork chop capicola. Pork pig porchetta burgdoggen, tail kevin jerky alcatra landjaeger ham hock boudin short loin tenderloin. Short ribs prosciutto pancetta beef turkey, tenderloin turducken. Filet mignon meatloaf fatback turducken chicken. Flank venison salami prosciutto, kevin capicola beef tail tenderloin. Corned beef tail shank shoulder kevin kielbasa."
    }
]

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds");
        // Add campgrounds
        // data.forEach(function(data){
        //     Campground.create(data, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         }else{
        //             console.log("Added a campground");
        //             Comment.create(
        //                 {
        //                     text: "This is the best place ever!",
        //                     author: "Jeyar"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     }else{
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 }
        //             );
        //         }
        //     });
        // });
    });
    //Add Comments
}

module.exports = seedDB;