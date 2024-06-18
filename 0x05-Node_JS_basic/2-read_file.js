const fs = require("fs");

function countStudents(path) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, "utf8");
    const lines = data.split("\n");

    // Initialize counters for each field
    const fields = {};
    for (const line of lines) {
      const [firstName, field] = line.split(",");
      if (firstName && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName.trim());
      }
    }

    // Log the number of students in each field
    console.log(`Number of students: ${lines.length - 1}`); // Subtract 1 to exclude header
    for (const field in fields) {
      console.log(
        `Number of students in ${field}: ${
          fields[field].length
        }. List: ${fields[field].join(", ")}`
      );
    }
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
