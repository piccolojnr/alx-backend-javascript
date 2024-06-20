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

app.get("/cart/:id(\\d+)", (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
