import express from "express";
import mongoose from "mongoose";
import { PORT, MONGO } from "./config.js";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN Stack Tutorial");
});

app.use("/books", bookRoute);

mongoose
  .connect(MONGO)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => console.log("App is listening to port " + PORT));
  })
  .catch((error) => {
    console.log(error);
  });
