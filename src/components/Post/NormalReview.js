import React from "react";
import styled from "styled-components";
import { formatDate } from "../../utils";
import { NormalWrapper } from "../../components/Wrapper";
import ReadMore from "../ReadMore";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";

const InfoContainer = styled.div`
  font-size: 14px;
  color: #373f27;
  background: ${(props) => props.theme.colors.light_grey};
  padding: 5px;
  margin: 10px 0;
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

const PostTitle = styled.div`
  text-decoration: none;
  font-size: 32px;
  color: #373f27;
  font-weight: bold;
`;

const Body = styled.div`
  margin-top: 10px;
  font-size: 14px;
  line-height: 2rem;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostWrapper = styled.div`
  padding: 18px 0;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: column;
  -webkit-filter: invert(1);

  &:hover {
    -webkit-filter: invert(0);
  }
`;

const ReadmoreWrapper = styled.div`
  margin-top: 5px;
  align-self: flex-end;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 18px;
  min-weidth: 90px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function NormalReview({ post, deletePostFunction }) {
  const user = useSelector(selectUser);
  const date = formatDate(post.createdAt);
  const history = useHistory();

  return (
    <NormalWrapper location={"middle"}>
      <PostWrapper>
        <TitleWrapper>
          <PostTitle>{post.title}</PostTitle>
          {user && user.id === post.user.id && (
            <ButtonWrapper>
              <Button
                color={"black"}
                onClick={() => history.push(`/edit/${post.id}`)}
              >
                編輯
              </Button>
              <Button
                color={(props) => props.theme.colors.orange}
                onClick={(e) => deletePostFunction(post.id)}
              >
                刪除
              </Button>
            </ButtonWrapper>
          )}
        </TitleWrapper>
        <InfoContainer>
          {date}　
          <PostAuthor to={`/author/${post.user.id}`}>
            by {post.user.nickname}
          </PostAuthor>
        </InfoContainer>
        <Body>{post.body}</Body>
        <ReadmoreWrapper>
          <ReadMore size={"small"} to={`/post/${post.id}`} />
        </ReadmoreWrapper>
      </PostWrapper>
    </NormalWrapper>
  );
}
