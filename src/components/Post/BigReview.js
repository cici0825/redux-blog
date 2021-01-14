import React from "react";
import styled from "styled-components";
import { formatDate } from "../../utils";
import { MEDIA_QUERY_MD } from "../../constants/breakpoint";
import ReadMore from "../ReadMore";
import picture from "../../images/home.jpg";
import { Link } from "react-router-dom";

const PostContainer = styled.div`
  background: ${(props) => props.theme.colors.light_grey};
  color: ${(props) => props.theme.colors.black};
  padding: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;

  ${MEDIA_QUERY_MD} {
    height: 50vw;
    width: 100%;
    flex-direction: row;
  }
`;

const PostWrapper = styled.div`
  border-top: 2px solid ${(props) => props.theme.colors.almost_grey};
  border-bottom: 2px solid ${(props) => props.theme.colors.almost_grey};
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 10px;
  justify-content: space-between;
  margin-bottom: 32px;
  min-height: 400px;

  ${MEDIA_QUERY_MD} {
    margin-bottom: 0px;
    margin-right: 32px;
    margin-bottom: 0px;
  }
`;

const PostPicture = styled.div`
  width: 80vw;
  height: 80vw;
  align-self: center;

  ${MEDIA_QUERY_MD} {
    height: 40vw;
    width: 40vw;
  }
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
`;

const PostTop = styled.div`
  font-weight: bold;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.font.xl}px;
  font-weight: bold;
  padding-right: 20px;

  ${MEDIA_QUERY_MD} {
    margin-bottom: 36px;
  }
`;

const PostBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostMiddle = styled.div`
  margin: 32px 0;

  ${MEDIA_QUERY_MD} {
    margin: 0px;
  }
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

export default function BigReview({ post }) {
  const date = formatDate(post.createdAt);
  return (
    <PostContainer>
      <PostWrapper>
        <PostTop>Article</PostTop>
        <PostMiddle>
          <Title>{post.title}</Title>
          <ReadMore to={`/post/${post.id}`} />
        </PostMiddle>
        <PostBottom>
          <div>{date}</div>
          <PostAuthor to={`/author/${post.user.id}`}>
            by {post.user.nickname}
          </PostAuthor>
        </PostBottom>
      </PostWrapper>
      <PostPicture>
        <Picture src={picture} />
      </PostPicture>
    </PostContainer>
  );
}
