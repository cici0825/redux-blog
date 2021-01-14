import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../../constants/breakpoint";

const Input = styled.input`
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 5px;
  padding: 10px;
  border: 0;
  border-bottom: 1.5px solid ${(props) => props.theme.colors.almost_grey};
  width: 80vw;
  box-sizing: border-box;
  ${(props) => {
    return props.size === "l" && "font-size: 18px;";
  }}

  &:focus {
    outline: none;
    background: ${(props) => props.theme.colors.dark_grey};
  }

  ${MEDIA_QUERY_MD} {
    width: ${(props) => {
      if (props.size === "l") {
        return "100%";
      } else {
        return "300px";
      }
    }};
  }
`;

export default function InputComponent({ type, value, onChange, size }) {
  return (
    <Input type={type} value={value} onChange={onChange} size={size}></Input>
  );
}
