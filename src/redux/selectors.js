export const selectPosts = (store) => store.posts.posts;
export const selectPost = (store) => store.posts.post;
export const selectIsLoadingPost = (store) => store.posts.isLoadingPost;
export const selectPostsNum = (store) => store.posts.totalPostsNum;
export const selectErrMessage = (store) => store.posts.errMessage;

export const selectIsLoadingUser = (store) => store.users.isLoadingUser;
export const selectUser = (store) => store.users.user;
export const selectUserErrMessage = (store) => store.users.errMessage;
