import { createSlice } from "@reduxjs/toolkit";
import {
  getPost as getPostAPI,
  addPost as addPostAPI,
  getPostsByPage as getPostsByPageAPI,
  getPostsNum as getPostsNumAPI,
  getPostsByAuthor as getPostsByAuthorAPI,
  deletePostAPI,
  updatePostAPI,
} from "../../WebAPI";

export const PostReducer = createSlice({
  name: "posts",
  initialState: {
    isLoadingPost: false,
    post: [],
    errMessage: null,
    posts: [],
    totalPostsNum: 0,
  },
  reducers: {
    setIsLoadingPost: (state, action) => {
      state.isLoadingPost = action.payload;
    },
    setPost: (state, action) => {
      state.post = action.payload;
    },
    setErrMessage: (state, action) => {
      state.errMessage = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setTotalPostsNum: (state, action) => {
      state.totalPostsNum = action.payload;
    },
    filterPost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const {
  setIsLoadingPost,
  setPost,
  setErrMessage,
  setPosts,
  setTotalPostsNum,
  filterPost,
} = PostReducer.actions;

// 拿到單一文章
export const getPost = (id) => (dispatch) => {
  dispatch(setIsLoadingPost(true));
  return getPostAPI(id)
    .then((res) => {
      dispatch(setPost(res));
      dispatch(setIsLoadingPost(false));
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
};

// 取得文章總數
export const getPostsNum = () => (dispatch) => {
  dispatch(setIsLoadingPost(true));
  getPostsNumAPI()
    .then((res) => {
      dispatch(setTotalPostsNum(res));
      dispatch(setIsLoadingPost(false));
    })
    .catch((error) => {
      console.log(error);
      dispatch(setIsLoadingPost(false));
    });
};

// 拿到特定範圍內的文章 + 抓取文章總數
export const getPostsByPage = (page, limit) => (dispatch) => {
  dispatch(setIsLoadingPost(true));
  return getPostsByPageAPI(page, limit)
    .then((res) => {
      dispatch(setPosts(res));
      dispatch(setIsLoadingPost(false));
      return res;
    })
    .catch((error) => {
      console.log(error);
      dispatch(setIsLoadingPost(false));
    });
};

// 拿到特定作者文章
export const getPostsByAuthor = (id) => (dispatch) => {
  dispatch(setIsLoadingPost(true));
  getPostsByAuthorAPI(id)
    .then((res) => {
      console.log(res);
      dispatch(setPosts(res));
      dispatch(setIsLoadingPost(false));
    })
    .catch((error) => {
      console.log(error);
      dispatch(setIsLoadingPost(false));
    });
};

// 新增文章
export const addPost = (data) => (dispatch) => {
  dispatch(setIsLoadingPost(true));
  return addPostAPI(data.title, data.content).then((res) => {
    return res;
  });
};

// 刪除文章
export const deletePost = (id) => (dispatch) => {
  dispatch(setIsLoadingPost(true));
  return deletePostAPI(id).then((res) => {
    // 手動重設 posts
    dispatch(filterPost(id));
    dispatch(setIsLoadingPost(false));
    return res;
  });
};

// 刪除文章
export const updatePost = (id, title, content) => (dispatch) => {
  dispatch(setIsLoadingPost(true));
  console.log("開始串 API");
  return updatePostAPI(id, title, content).then((res) => {
    dispatch(setIsLoadingPost(false));
    return res;
  });
};

export default PostReducer.reducer;
