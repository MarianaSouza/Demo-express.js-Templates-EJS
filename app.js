var express =  require("express");
var app = express();

//First method to render images from the public folder by using the path lib from node:
// var path = require('path');
// var dir = path.join(__dirname, 'public'); 
// app.use(express.static(dir));

//Second method to render images from the public folder:
app.use(express.static(__dirname + '/public'));

app.get("/" , function(req, res){
	//The render method allows you to render a ejs file where you can find the html and js.
	//You always need to put these render files in a directory called views.
	res.render("home.ejs");
	//res.send("Welcome to my homepage!");
});

//Using params : to get a dynamic answer
// app.get("/fallinginlovewith/:thing" , function (req, res){
// 	var thing = req.params.thing;
// 	res.send("You fell in love with " + thing);

// });

app.get("/fallinginlovewith/:thing" , function (req, res){
	var thing = req.params.thing;
	//{thingVar : thing} That means that, in the template love.ejs, thingVar = thing
	res.render("love.ejs" , {thingVar: thing});

});


app.get("/posts", function(req, res){

	var posts = [
	 {title: "post 1", author: "author1"},
	 {title: "post 2", author: "author2"},
	 {title: "post 3", author: "author3"}
	]

	res.render("posts.ejs" , {posts: posts});

});

app.listen(3000, function () {
	console.log("Server is listening!");
});
