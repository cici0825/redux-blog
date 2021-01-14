import { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { NormalWrapper } from "../../components/Wrapper";
import { Button } from "../../components/Button";
import { selectPost, selectUser } from "../../redux/selectors";
import {
  getPost,
  setIsLoadingPost,
  setPost,
} from "../../redux/reducers/postReducer";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../redux/reducers/postReducer";

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

const PostDate = styled.div`
  margin-top: 5px;
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
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Post({ post }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();

  const deletePostFunction = (id) => {
    alert("確定要刪除嗎？");
    dispatch(deletePost(id)).then((res) => {
      if (!res.ok) return alert("刪除失敗");
      alert("刪除成功");
      return history.push("/posts/1");
    });
  };
  return (
    <>
      {post[0] && (
        <NormalWrapper>
          {post[0] && post[0].user && user && user.id === post[0].user.id && (
            <ButtonWrapper>
              <Button
                color={"black"}
                onClick={() => history.push(`/edit/${post[0].id}`)}
              >
                編輯
              </Button>
              <Button
                color={(props) => props.theme.colors.orange}
                onClick={(e) => deletePostFunction(post[0].id)}
              >
                刪除
              </Button>
            </ButtonWrapper>
          )}
          <PostTitle>{post[0].title}</PostTitle>
          <InfoContainer>
            <PostAuthor to={`/author/${post[0].user.id}`}>
              by {post[0].user.nickname}
            </PostAuthor>
            <PostDate>{new Date(post[0].createdAt).toLocaleString()}</PostDate>
          </InfoContainer>
          <Body>{post[0].body}</Body>
        </NormalWrapper>
      )}
    </>
  );
}

Post.propType = {
  post: PropTypes.object,
};

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(selectPost);

  useEffect(() => {
    dispatch(getPost(id));

    return () => {
      dispatch(setIsLoadingPost(false));
      dispatch(setPost([]));
    };
  }, [id, dispatch]);

  return <>{post[0] && <Post key={post[0].id} post={post} />}</>;
}

Post.propType = {
  post: PropTypes.object,
  author: PropTypes.string,
};
