import express, { Request, Response, NextFunction } from "express";
import { Post } from "../models/Post";
import multer from "multer";
import mongoose from "mongoose";

const router = express.Router();

// Configure Multer for image uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// ✅ Create a new post
router.post(
  "/",
  upload.single("image"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("📩 Received post request:", req.body); // ✅ Log request data for debugging

      const { content, userId, username, avatar } = req.body;
      if (!content || !userId || !username) {
        res.status(400).json({ message: "Missing required fields" });
        return;
      }

      // ✅ Ensure userId is a valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: "Invalid user ID" });
        return;
      }

      // ✅ Update the image path to be accessible via backend URL
      const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

      const post = new Post({
        user: new mongoose.Types.ObjectId(userId),
        username,
        avatar,
        content,
        image: imagePath, // ✅ Ensure correct image path
      });

      await post.save();
      res.status(201).json(post);
    } catch (error) {
      next(error);
    }
  }
);

// ✅ Fetch all posts
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  console.log("📥 Received request to fetch all posts"); // ✅ Log request data for debugging
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

// ✅ Like a post
router.put(
  "/like/:postId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.body;
      if (!userId) {
        res.status(400).json({ message: "User ID is required" });
        return;
      }

      const post = await Post.findById(req.params.postId);
      if (!post) {
        res.status(404).json({ message: "Post not found" });
        return;
      }

      const likeIndex = post.likes.indexOf(userId);
      if (likeIndex !== -1) {
        post.likes.splice(likeIndex, 1);
      } else {
        post.likes.push(userId);
      }

      await post.save();
      res.json(post);
    } catch (error) {
      next(error);
    }
  }
);

// ✅ Comment on a post
router.post(
  "/comment/:postId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, username, avatar, text } = req.body;
      if (!userId || !username || !text) {
        res.status(400).json({ message: "Missing required fields" });
        return;
      }

      const post = await Post.findById(req.params.postId);
      if (!post) {
        res.status(404).json({ message: "Post not found" });
        return;
      }

      const comment = {
        user: userId,
        username,
        avatar,
        text,
        createdAt: new Date(),
      };

      post.comments.push(comment);
      await post.save();
      res.json(post);
    } catch (error) {
      next(error);
    }
  }
);

// ✅ Fetch posts by a specific user
router.get(
  "/user/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("📥 Received request to fetch user posts"); // ✅ Log request data for debugging
    try {
      const posts = await Post.find({ user: req.params.userId }).sort({
        createdAt: -1,
      });
      res.json(posts);
    } catch (error) {
      next(error);
    }
  }
);



export default router;
