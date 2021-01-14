import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils";
import { MEDIA_QUERY_MD } from "../../constants/breakpoint";

const PostContainer = styled.div`
  min-height: 80vw;
  width: 80vw;
  display: flex;
  background: ${(props) => props.theme.colors.light_grey};
  color: ${(props) => props.theme.colors.black};
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;

  ${MEDIA_QUERY_MD} {
    min-height: 25vw;
    width: 25vw;
  }
`;

const PostTop = styled.div`
  font-weight: bold;
`;

const Title = styled(Link)`
  font-size: ${(props) => props.theme.font.lg}px;
  font-weight: bold;
  margin-bottom: 36px;
  text-decoration: none;
  color: black;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const PostBottom = styled.div`
  display: flex;
  justify-content: space-between;

  & * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 50%;
  }
`;

const PostMiddle = styled.div`
  margin: 0;
`;

const PostAuthor = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: ${(props) => props.theme.colors.orange};
  }

  &:active {
    color: black;
  }
`;

export default function SmallReview({ post }) {
  const date = formatDate(post.createdAt);
  return (
    <PostContainer>
      <PostTop>Article</PostTop>
      <PostMiddle>
        <Title to={`/post/${post.id}`}>{post.title}</Title>
      </PostMiddle>
      <PostBottom>
        <div>{date}</div>
        <PostAuthor to={`/author/${post.user.id}`}>
          by {post.user.nickname}
        </PostAuthor>
      </PostBottom>
    </PostContainer>
  );
}
