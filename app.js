const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
const port = 3000;

app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connections;
db.on("error", () => {
  console.log("mongodb error");
});
db.once("open", () => {
  console.log("mongodb connected");
});
