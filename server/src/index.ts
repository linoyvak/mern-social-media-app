import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // ✅ Required for parsing JSON requests
app.use(express.urlencoded({ extended: true })); // ✅ Required for handling form data

// ✅ Serve uploaded images as static files
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));


app.get("/", (req, res) => {
  res.send("🚀 Server is running with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
