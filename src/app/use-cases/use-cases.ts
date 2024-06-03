import { ExampleRepository } from "../domain";

export class ExplamUseCase {
  constructor(private readonly use: ExampleRepository) {}
  public useExample = async (message: string) => {
    return await this.use.example(message);
  };
}
