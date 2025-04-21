import app from "./app.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
// here database connection with server connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("server started successfully at PORT:", PORT);
    });
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("ERROR: ", error.message);
  });
