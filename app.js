const express = require("express");
const app = express();
const path = require("path");
const port = 5000;

//middleware express.static serves static files, like html pages.
// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/about.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/about.html"));
});

app.get("/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/contact.html"));
});

app.get("/404.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/egg.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/404.html"));
});

app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});
