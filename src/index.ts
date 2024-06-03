import { app } from "./app";
import { port } from "./data";
import { ConnectionDB } from "./libs";

ConnectionDB();

app.listen(port, () => {
  console.log("Template Api");
  console.log(`Server on port ${port}`);
  console.log(`http://localhost:${port}`);
});
