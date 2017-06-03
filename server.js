
//dependencies

var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

//setup

var app = express();
var PORT = process.env.PORT || 8080;

//parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//static directory

app.use(express.static("./public"));

//routes (search being the only one for now)

require("./routes/search.js")(app);

db.sequelize.sync();

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
