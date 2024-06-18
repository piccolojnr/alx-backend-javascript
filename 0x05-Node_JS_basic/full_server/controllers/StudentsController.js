// full_server/controllers/StudentsController.js

import { readDatabase } from "../utils";

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(req.app.get("dbFilePath"));
      const response = ["This is the list of our students"];

      Object.entries(studentsByField)
        .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
        .forEach(([field, students]) => {
          response.push(
            `Number of students in ${field}: ${
              students.length
            }. List: ${students.join(", ")}`
          );
        });

      res.status(200).send(response.join("\n"));
    } catch (error) {
      res.status(500).send(error.message || "Cannot load the database");
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== "CS" && major !== "SWE") {
      return res.status(500).send("Major parameter must be CS or SWE");
    }

    try {
      const studentsByField = await readDatabase(req.app.get("dbFilePath"));
      const students = studentsByField[major] || [];
      res.status(200).send(`List: ${students.join(", ")}`);
    } catch (error) {
      res.status(500).send(error.message || "Cannot load the database");
    }
  }
}

export default StudentsController;
