// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER
// ================================================================================

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });


