import { ExampleRepository } from "../../domain";

export class MockRepository implements ExampleRepository {
  async example(message: string): Promise<string> {
    return "Message: " + message;
  }
}
