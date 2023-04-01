const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
const port = 3000;

const User = require("./models/user");

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.log("mongodb error");
});
db.once("open", () => {
  console.log("mongodb connected");
});

app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email, password })
    .then((user) => {
      if (user !== null) {
        res.redirect(`/login/${user._id}`);
      } else {
        res.render("index", { email, password });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/login/:id", (req, res) => {
  res.render("welcome");
});

app.listen(port, () => {
  console.log(`This is running on http://localhost:${port}`);
});
