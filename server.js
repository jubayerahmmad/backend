import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import foodRoutes from "./src/routes/foodRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());

// Routes
app.use("/foods", foodRoutes);

app.get("/", () => {
  console.log("Hello from the Server");
});

// DB connection & server start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
