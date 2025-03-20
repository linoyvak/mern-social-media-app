import {
  ADD_POST,
  FETCH_POSTS,
  LIKE_POST,
  COMMENT_POST,
  FETCH_USER_POSTS,
  DELETE_POST
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

 


    case LIKE_POST:
    case COMMENT_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };


      case FETCH_USER_POSTS:
        return { ...state, userPosts: action.payload };
  
        case DELETE_POST:
          console.log(action.payload);
          return {
            ...state,
            posts: state.posts.filter((post) => post._id !== action.payload),
            userPosts: state.userPosts.filter((post) => post._id !== action.payload),
          };
   
    default:
      return state;
  }
};
