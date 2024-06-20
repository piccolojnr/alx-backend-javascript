const express = require("express");
const app = express();
const port = 7865;

app.use((req, res, next) => {
  console.log("API available on localhost port 7865");
  next();
});

// Route for GET /
app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});

// Start the server
app.listen(port, () => {
  console.log("API available on localhost port 7865");
});
