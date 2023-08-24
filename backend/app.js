const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./src/routes/index.js");

const startServer = () => {
  const app = express();
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(routes);

  const PORT = 5000;

  app.listen(PORT, "0.0.0.0", () =>
    console.log(`server is listening on ${PORT}`)
  );
};

startServer();
