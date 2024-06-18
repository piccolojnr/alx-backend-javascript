// full_server/utils.js

import fs from "fs";

/**
 * Reads the database asynchronously.
 * @param {String} filePath The path to the database file.
 * @returns {Promise} A promise that resolves with an object of arrays of first names per fields.
 */
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(new Error("Cannot load the database"));
      } else {
        const lines = data.trim().split("\n");
        const header = lines.shift().split(",");
        const studentsByField = {};

        lines.forEach((line) => {
          const [firstName, , field] = line.split(",");
          if (field) {
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(firstName);
          }
        });

        resolve(studentsByField);
      }
    });
  });
}
