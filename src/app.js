import express from "express";
import router from "./router/users.router.js";
import ApiError from "./utils/ApiError.js";
const app = express();

// middleware and simple config
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb" }));

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("This is main page");
});

app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      message: err.message,
      status: err.statusCode,
    });
  }
  res.status(500).json({
    message: "Internal Server error",
    status: 500,
  });
});
export default app;
