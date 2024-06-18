const express = require("express");
const countStudents = require("./3-read_file_async");

const PORT = 1245;
const app = express();
const DB_FILE = process.argv[2] || "";

// Route for the root path
app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});

// Route for /students path
app.get("/students", (req, res) => {
  countStudents(DB_FILE)
    .then((report) => {
      res.send(`
        This is the list of our students\n
        ${report}
      `);
    })
    .catch((err) => {
      res.status(500).send(err.message || err.toString());
    });
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

// Export the app variable
module.exports = app;
