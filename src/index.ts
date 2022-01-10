import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import "dotenv/config";

import Router from "./routes";

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(express.json()); // middleware to parse request body
app.use(morgan("tiny")); // middleware to log requests
app.use(express.static("public")); // middleware to serve static files
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, { swaggerOptions: { url: "/swagger.json" } })
); // middleware for Swagger
app.use(Router); // middleware that contains all routing logic

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
