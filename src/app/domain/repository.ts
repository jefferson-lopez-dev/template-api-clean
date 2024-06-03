export interface ExampleRepository {
  example: (message: string) => Promise<string>;
}
