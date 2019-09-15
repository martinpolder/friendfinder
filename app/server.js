
var path = require("path");
var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

// sets up express for data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/data'));
app.use(express.static(__dirname + '/public'));





// link to the routing files 
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
    console.log("URL: localhost:3000/")
});
