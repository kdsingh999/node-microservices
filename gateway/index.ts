import express, { Application, Request, Response } from "express";
import cors from "cors";
import proxy from "express-http-proxy";
require("dotenv").config({
  path: __dirname + "/.env",
});

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(
  "/customer",
  proxy(process.env.CUSTOMER_URL || "http://localhost:8001")
);
app.use(
  "/shopping",
  proxy(process.env.SHOPPING_URL || "http://localhost:8003")
);
app.use(
  "/products",
  proxy(process.env.PRODUCTS_URL || "http://localhost:8002")
);

app.get("/", (req: Request, res: Response): any => {
  return res.json({
    message: "Hello World",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
