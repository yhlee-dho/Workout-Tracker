const express = require('express');
// const mongojs = require('mongojs');
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

// mongodb
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/workout`, { useNewUrlParser: true });

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));
 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});