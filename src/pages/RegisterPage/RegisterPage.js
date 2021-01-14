import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import Orange from "../../components/Span";
import { InputWrapper } from "../../components/Wrapper";
import {
  selectIsLoadingUser,
  selectUser,
  selectUserErrMessage,
} from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLoadingUser,
  setErrMessage,
  register,
  getMe,
} from "../../redux/reducers/userReducer";

const InputGroup = styled.div`
  margin: 8px 0;
`;

const Title = styled.h1`
  margin-top: 0px;
`;

const ErrMessage = styled.div`
  color: red;
`;

export default function HomePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingUser);
  const errMessage = useSelector(selectUserErrMessage);
  const user = useSelector(selectUser);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const history = useHistory();

  // 如果已經登入就離開
  if (user) {
    history.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    const registerResult = await dispatch(
      register(username, password, nickname)
    );
    if (!registerResult) return;
    const getMeResult = await dispatch(getMe());
    if (!getMeResult) return;
    history.push("/");
  };

  // 防止這頁還沒跑完其他頁也不能跑
  useEffect(() => {
    return () => {
      dispatch(setIsLoadingUser(false));
      dispatch(setErrMessage(""));
    };
  }, []);

  return (
    <InputWrapper>
      <div>
        <Title>
          <Orange>R</Orange>egister
        </Title>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputGroup>
            USERNAME
            <br />
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            PASSWORD
            <br />
            <Input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            NICKNAME
            <br />
            <Input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </InputGroup>
          {errMessage && <ErrMessage>{errMessage}</ErrMessage>}
          <Button size={"medium"} color={"black"}>
            送出
          </Button>
        </form>
      </div>
    </InputWrapper>
  );
}
