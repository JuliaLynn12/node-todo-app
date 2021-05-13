const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/todo_express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => console.log("Server started listening on port: 3000"));
