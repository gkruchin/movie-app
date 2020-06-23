const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// app.get("/login", (req, res) => {
//   res.redirect(path.join(__dirname, "../client/containers/Feed.jsx"));
// });

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
