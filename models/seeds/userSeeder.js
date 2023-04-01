const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const User = require("../user");
const userList = require("../../users.json").results;

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error");
});

db.once("open", () => {
  console.log("mongodb connected");
  console.log("running userSeeder script...");

  User.create(userList)
    .then(() => {
      console.log("userSeeder done!");
      db.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
