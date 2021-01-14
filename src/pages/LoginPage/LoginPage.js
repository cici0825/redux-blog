import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import Orange from "../../components/Span";
import {
  selectIsLoadingUser,
  selectUser,
  selectUserErrMessage,
} from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLoadingUser,
  login,
  setErrMessage,
  getMe,
} from "../../redux/reducers/userReducer";
import { InputWrapper } from "../../components/Wrapper";
import { Input } from "../../components/Input";

const Title = styled.h1`
  margin-top: 0px;
`;

const ErrMessage = styled.div`
  color: red;
`;

const InputGroup = styled.div`
  margin: 8px 0;
`;

export default function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoadingUser);
  const errMessage = useSelector(selectUserErrMessage);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 如果已經登入就離開
  if (user) {
    history.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    const result = await dispatch(login(username, password));
    if (!result) return;
    const getMeResult = await dispatch(getMe());
    if (!getMeResult) return;
    if (result) history.push("/");
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
          Log<Orange>i</Orange>n
        </Title>
        <form onSubmit={handleSubmit}>
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
          {errMessage && <ErrMessage>{errMessage}</ErrMessage>}
          <Button size={"medium"} color={"black"}>
            送出
          </Button>
        </form>
      </div>
    </InputWrapper>
  );
}
