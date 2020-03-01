const express = require('express');
const mongojs = require('mongojs');
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

// atlas for mongodb sandbox
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://workoutTracker:12345@cluster0-4ygsj.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));
 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});