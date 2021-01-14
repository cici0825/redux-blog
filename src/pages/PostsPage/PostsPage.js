import { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Pagination } from "../../components/Button";
import { selectPosts, selectPostsNum } from "../../redux/selectors";
import {
  getPostsNum,
  setIsLoadingPost,
  setPosts,
  getPostsByPage,
} from "../../redux/reducers/postReducer";
import { useDispatch, useSelector } from "react-redux";
import { NormalReview as Post } from "../../components/Post";
import { deletePost } from "../../redux/reducers/postReducer";

const Wrapper = styled.div`
  margin-top: 100px;
`;

const Title = styled.h1`
  text-align: center;
`;

export default function HomePage() {
  const limit = 5;
  const page = useParams().page || 1;
  const pagesNum = useRef();
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const postsNum = useSelector(selectPostsNum);

  // 分頁邏輯：先抓全部的得到總數 -> render 第一頁和按鈕
  useEffect(() => {
    console.log("refresh");
    dispatch(setIsLoadingPost(true));
    dispatch(getPostsNum());
    pagesNum.current = Math.ceil(postsNum / limit);
    dispatch(getPostsByPage(page, limit));

    return () => {
      dispatch(setIsLoadingPost(false));
    };
  }, [page, dispatch, postsNum]);

  const deletePostFunction = (id) => {
    alert("確定要刪除嗎？");
    dispatch(deletePost(id)).then((res) => {
      console.log(res);
      if (!res.ok) return alert("刪除失敗");
      dispatch(getPostsNum());
      return alert("刪除成功");
    });
  };

  console.log(posts);
  return (
    <Wrapper>
      <Title>ALL POSTS</Title>
      {posts &&
        posts.map((post) => (
          <Post
            key={post.id}
            deletePostFunction={deletePostFunction}
            post={post}
          />
        ))}
      {pagesNum.current && <Pagination num={pagesNum.current} />}
    </Wrapper>
  );
}
