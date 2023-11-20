const express = require("express");
const app = express();

const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = require("./swaggeer.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(5000, () => {
  console.log(`Server listening on 5000`);
});
