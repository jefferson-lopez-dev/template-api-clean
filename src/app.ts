import cors from "cors";
import express, { json } from "express";
import morgan from "morgan";
import { corsConfig } from "./config";
import { api_information } from "./data";
import { exampleRoute } from "./app/index";

export const app = express();

app.use(morgan("dev"));
app.use(cors(corsConfig));
app.use(json());
app.use("/", exampleRoute);
app.use("/", (_req, res) => res.json(api_information));
