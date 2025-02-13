import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import team from "./routers/team.js";
import teamPagination from "./routers/teamPagination.js";

//to use the file .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
//to log request http
app.use(morgan("dev"));

app.use("/teams", team);
app.use("/teamPagination", teamPagination);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`The API listening on: ${process.env.SERVER_PORT}`);
});
