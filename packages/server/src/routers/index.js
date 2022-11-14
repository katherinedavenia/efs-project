const express = require("express");
const port = process.env.PORT || 4000;
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
  cors({
    allowedHeaders: [
      "sessionId",
      "Access-Control-Allow-Origin",
      "Content-Type",
    ],
    exposedHeaders: ["sessionId"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

const fisheryRouter = require("./api");
app.use(fisheryRouter);

app.get("/", (req, res) => {
  res.send("CLI App Backend Server");
});

app.use((err, req, res, next) => {
  // throw error 4xx if expected error
  console.log(err.response?.data);
  console.log(err.message);
  res.status(500).json({ error: "internal server error" });
});

app.listen(port, (err) => {
  if (err) {
    console.log(`${err.message}`);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
