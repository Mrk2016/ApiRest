import app from "./app.js";
import { connectDB } from "./database/db_connection.js";

const port = process.env.PORT || 3000;

connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});