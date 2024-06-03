import { Router } from "express";
import { MockRepository as Repository } from "../repository";
import { ExplamUseCase as UseCase } from "../../use-cases";
import { ExampleController as Controllers } from "../controllers";

export const exampleRoute = Router();
const route = exampleRoute;

const repo = new Repository();
const use = new UseCase(repo);
const { example } = new Controllers(use);

route.get("/example", example);
