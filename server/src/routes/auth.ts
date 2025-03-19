import express, { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User";
import admin from "firebase-admin";

dotenv.config();
const router = express.Router();


// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      // Replace literal "\n" with actual newlines in the private key string.
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
  });
}

const generateAccessToken = (user: any): string => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: "15m",
  });
};

const generateRefreshToken = (user: any): string => {
  return jwt.sign({ id: user.id }, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: "7d",
  });
};

// ✅ User Registration
router.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, username, password } = req.body;

      if (!email || !username || !password) {
        res.status(400).json({ message: "All fields are required" });
        return;
      }

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.status(400).json({ message: "Email already in use" });
        return;
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, username, password: hashedPassword });

      await user.save();

      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      res.status(201).json({ user, accessToken, refreshToken });
    } catch (error) {
      next(error);
    }
  }
);

// ✅ User Login
router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await User.findOne({ email });

      if (!user || !user.password) {
        res.status(400).json({ message: "Invalid email or password" });
        return;
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: "Invalid email or password" });
        return;
      }

      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      res.json({ user, accessToken, refreshToken });
    } catch (error) {
      next(error);
    }
  }
);

// ✅ Refresh Token
router.post(
  "/refresh",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token required" });
      return;
    }

    try {
      const decoded: any = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET!
      );
      const user = await User.findById(decoded.id);
      if (!user) {
        res.status(403).json({ message: "Invalid refresh token" });
        return;
      }

      const newAccessToken = generateAccessToken(user);
      res.json({ accessToken: newAccessToken });
    } catch {
      res.status(403).json({ message: "Invalid refresh token" });
    }
  }
);

// ✅ Logout (Clear Tokens)
router.post("/logout", (req: Request, res: Response) => {
  res.status(200).json({ message: "Logged out successfully" });
});

router.post(
  "/google",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { token } = req.body;
      if (!token) {
        res.status(400).json({ message: "Token is required" });
        return;
      }
      // Verify the ID token using Firebase Admin SDK
      const decodedToken = await admin.auth().verifyIdToken(token);
      const email = decodedToken.email;
      if (!email) {
        res.status(400).json({ message: "Email not found in token" });
        return;
      }
      // Check if user exists; if not, create a new user with authProvider set to 'google'
      let user = await User.findOne({ email });
      if (!user) {
        user = new User({
          email,
          username: decodedToken.name || email.split("@")[0],
          authProvider: "google",
        });
        await user.save();
      }
      // Generate JWT tokens for the user
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      res.json({ user, accessToken, refreshToken });
    } catch (error) {
      console.error("Error in Google OAuth:", error);
      res.status(400).json({ message: "Invalid token", error });
    }
  }
);


export default router;
