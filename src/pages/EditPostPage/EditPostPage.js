import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import {
  getPost,
  setIsLoadingPost,
  setErrMessage,
  updatePost,
} from "../../redux/reducers/postReducer";
import {
  selectIsLoadingPost,
  selectErrMessage,
  selectUser,
  selectPost,
} from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import Orange from "../../components/Span";
import { Input, Textarea } from "../../components/Input";
import { Button } from "../../components/Button";
import { NormalWrapper } from "../../components/Wrapper";

const Title = styled.h1`
  margin-top: 0px;
`;

const ErrMessage = styled.div`
  color: red;
`;

const InputGroup = styled.div`
  font-size: 14px;
  & + & {
    margin-top: 10px;
  }
`;

export default function EditPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector(selectPost);
  const isLoading = useSelector(selectIsLoadingPost);
  const errMessage = useSelector(selectErrMessage);
  const user = useSelector(selectUser);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id)).then((data) => {
      setTitle(data[0].title);
      setContent(data[0].body);
    });

    return () => {
      dispatch(setIsLoadingPost(false));
      dispatch(setErrMessage(""));
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    if (user.id !== post[0].user.id)
      return alert("你沒有權限編輯這篇文章，請確認登入狀況。");
    dispatch(setErrMessage(""));
    if (!title || !content) {
      return dispatch(setErrMessage("標題和內容不可空白"));
    }
    dispatch(updatePost(id, title, content)).then((res) => {
      dispatch(setIsLoadingPost(false));
      return history.push(`/post/${res.id}`);
    });
  };

  return (
    <NormalWrapper>
      <Title>
        Edit Post <Orange>#</Orange>
        {post[0] && post[0].id}
      </Title>
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputGroup>
          TITLE
          <br />
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            size={"l"}
          />
        </InputGroup>
        <InputGroup>
          CONTENT
          <br />
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </InputGroup>
        {errMessage && <ErrMessage>{errMessage}</ErrMessage>}
        <Button size={"medium"} color={"black"}>
          送出
        </Button>
      </form>
    </NormalWrapper>
  );
}
