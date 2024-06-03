import { Request, Response } from "express";
import { ExplamUseCase } from "../../use-cases";

export class ExampleController {
  constructor(private use: ExplamUseCase) {}

  public example = async (req: Request, res: Response) => {
    const message = await this.use.useExample(req.query.m as string);
    return res.json(message);
  };
}
