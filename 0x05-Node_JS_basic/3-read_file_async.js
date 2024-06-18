const fs = require("fs");

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(new Error("Cannot load the database"));
      } else {
        const lines = data.split("\n");
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

        console.log(`Number of students: ${lines.length - 1}`); // Subtract 1 to exclude header
        for (const field in fields) {
          console.log(
            `Number of students in ${field}: ${
              fields[field].length
            }. List: ${fields[field].join(", ")}`
          );
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
