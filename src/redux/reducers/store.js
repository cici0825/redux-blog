import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export default configureStore(
  {
    reducer: {
      posts: postReducer,
      users: userReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
