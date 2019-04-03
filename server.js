const express = require("express");
const mongoose = require("mongoose");
const dbKey = require("./config/keys").mongoURI;
const users = require("./routes/api/user");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB connection
mongoose
  .connect(dbKey, { useNewUrlParser: true })
  .then(() => console.log("mongoDB is also connected"))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

// use routes
app.use("/api/user", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is up and running on port ${port}`));
