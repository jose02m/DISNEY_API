import app from "./app.js";
import "./db/database.js";

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
