
// Dependencies

var path = require("path");

// Routes

module.exports = function(app) {

  // placeholder html for now

  // index route for default
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //search route will go here.
};
