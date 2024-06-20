const express = require("express");
const app = express();
const port = 7865;

app.get("/", (_req, res) => {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id(\\d+)", (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get("/available_payments", (_req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post("/login", (req, res) => {
  const { userName } = req.body;

  res.send(`Welcome ${userName}`);
});

// Start the server
app.listen(port, () => {
  console.log("API available on localhost port 7865");
});
