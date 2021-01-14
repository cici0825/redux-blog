import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { selectPosts } from "../../redux/selectors";
import {
  getPostsByAuthor,
  setIsLoadingPost,
  setPosts,
} from "../../redux/reducers/postReducer";
import { useDispatch, useSelector } from "react-redux";
import { NormalReview as Post } from "../../components/Post";
import Orange from "../../components/Span";
import { deletePost } from "../../redux/reducers/postReducer";

const Wrapper = styled.div`
  margin-top: 100px;
`;

const Title = styled.h1`
  text-align: center;
`;

export default function HomePage() {
  const id = useParams().id || 1;
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPostsByAuthor(id));

    return () => {
      dispatch(setIsLoadingPost(false));
      dispatch(setPosts([]));
    };
  }, [dispatch, id]);

  const deletePostFunction = (id) => {
    alert("確定要刪除嗎？");
    dispatch(deletePost(id)).then((res) => {
      if (!res.ok) return alert("刪除失敗");
      return alert("刪除成功");
    });
  };

  console.log(posts);
  return (
    <Wrapper>
      <Title>
        {posts[0] ? (
          <>
            {posts[0].user.nickname}
            <Orange>`s</Orange> POSTS
          </>
        ) : (
          `這位作者目前沒有文章ㄛ`
        )}
      </Title>
      {posts[0] &&
        posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            deletePostFunction={() => deletePostFunction(post.id)}
          />
        ))}
    </Wrapper>
  );
}
