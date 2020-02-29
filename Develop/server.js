const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/custommethoddb",
  { useNewUrlParser: true }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});