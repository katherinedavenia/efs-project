const express = require("express");
const port = process.env.PORT || 4000;
const app = express();

app.get("/", (re, res) => {
  res.send("CLI App Backend Server");
});

app.listen(port, (err) => {
  if (err) {
    console.log(`${err.message}`);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
 