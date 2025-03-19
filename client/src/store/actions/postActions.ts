import axios from "axios";
import { Dispatch } from "redux";

export const FETCH_POSTS = "FETCH_POSTS";
export const ADD_POST = "ADD_POST";

// Fetch all posts
export const fetchPosts = () => async (dispatch: Dispatch) => {
  const { data } = await axios.get("http://localhost:5000/api/posts/");
  dispatch({ type: FETCH_POSTS, payload: data });
};


// Create a new post
export const addPost =
  (content: string, image: File | null) =>
  async (dispatch: Dispatch, getState: any) => {
    const { auth } = getState();
    if (!auth.user || !auth.user._id) {
      console.error("❌ Missing user ID when creating a post");
      return;
    }

    const formData = new FormData();
    formData.append("content", content);
    formData.append("userId", auth.user._id);
    formData.append("username", auth.user.username);
    formData.append("avatar", auth.user.profileImage || "");

    if (image) formData.append("image", image);

    const { data } = await axios.post(
      "http://localhost:5000/api/posts",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    dispatch({ type: ADD_POST, payload: data });
  };

