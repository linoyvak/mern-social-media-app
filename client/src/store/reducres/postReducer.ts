import {
  ADD_POST,
  FETCH_POSTS,
} from "../actions/postActions";

interface Post {
  _id: string;
  username: string;
  avatar?: string;
  content: string;
  image?: string;
  likes: string[];
  comments: Comment[];
}

interface Comment {
  user: string;
  username: string;
  avatar?: string;
  text: string;
  createdAt: string;
}

interface PostState {
  posts: Post[];
  userPosts: Post[];
}

const initialState: PostState = {
  posts: [],
  userPosts: [],
};

export const postReducer = (state = initialState, action: any): PostState => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
      case ADD_POST:
        return { ...state, posts: [action.payload, ...state.posts] };
  
    default:
      return state;
  }
};
