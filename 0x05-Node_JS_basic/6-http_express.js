const express = require("express");

const PORT = 1245;
const app = express();

// Route for the root path
app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});

// Handling 404 errors
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Error</title>
    </head>
    <body>
      <pre>Cannot GET ${req.originalUrl}</pre>
    </body>
    </html>
  `);
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

// Export the app variable
module.exports = app;
