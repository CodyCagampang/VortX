const mongoose = require('mongoose');
const path = require('path');
const dbURI = "mongodb+srv://codycagampang_db_user:o(>!ZT8D4C69@cluster0.xyrzwtm.mongodb.net/VortX?retryWrites=true&w=majority";

mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
  console.log("API DB: Mongoose connected");
});

mongoose.connection.on("error", err => {
  console.log("API DB error: " + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("API DB disconnected");
});

// IMPORTANT: load your models
require(path.join(__dirname, 'teams.js')); // ChatGPT to fix silent errors


//require('./users'); // optional
