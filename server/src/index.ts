import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // ✅ Required for parsing JSON requests
app.use(express.urlencoded({ extended: true })); // ✅ Required for handling form data


// MongoDB Connection
mongoose
  .connect(
    process.env.MONGO_URI as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("🚀 Server is running with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
