import express, { Application, Request, Response } from "express";
require("dotenv").config({
  path: __dirname + "/.env",
});

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): any => {
  return res.json({
    message: "This is from customer service",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
