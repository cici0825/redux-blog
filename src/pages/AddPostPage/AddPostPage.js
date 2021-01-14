import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  addPost,
  setIsLoadingPost,
  setErrMessage,
} from "../../redux/reducers/postReducer";
import {
  selectIsLoadingPost,
  selectErrMessage,
  selectUser,
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

export default function AddPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingPost);
  const errMessage = useSelector(selectErrMessage);
  const user = useSelector(selectUser);

  // 身分驗證
  if (!user) {
    history.push("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    dispatch(setErrMessage(""));
    dispatch(addPost({ title, content })).then((res) => {
      dispatch(setIsLoadingPost(false));
      if (res.ok !== 0) {
        history.push(`/post/${res.id}`);
      }
      return dispatch(setErrMessage(res.message));
    });
  };

  // 離開前清空 loading 和 errMessage
  useEffect(() => {
    return () => {
      dispatch(setIsLoadingPost(false));
      dispatch(setErrMessage(""));
    };
  }, []);

  return (
    <NormalWrapper>
      <Title>
        New <Orange>P</Orange>ost
      </Title>
      <form onSubmit={handleSubmit}>
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
