const express = require("express");
const mongoose = require("mongoose");
const dbKey = require("./config/keys").mongoURI;
const users = require("./routes/api/user");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();
//DB connection

mongoose
  .connect(dbKey, { useNewUrlParser: true })
  .then(() => console.log("mongoDB is also connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello world"));

// use routes
app.use("/api/user", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is up and running on port ${port}`));
