const http = require("http");

// Create HTTP server
const app = http.createServer((req, res) => {
  // Set the content type to plain text
  res.setHeader("Content-Type", "text/plain");

  // Write the response
  res.write("Hello Holberton School!");

  // End the response
  res.end();
});

// Set the server to listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;
