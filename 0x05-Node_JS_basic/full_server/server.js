// full_server/server.js

import express from "express";
import routes from "./routes";

const app = express();
const PORT = 1245;

app.use(express.json());

app.use((req, res, next) => {
  req.app.set("dbFilePath", process.argv[2] || "");
  next();
});

app.use("/", routes);

const server = app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

export default app;
