import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../../constants/breakpoint";

const Textarea = styled.textarea`
  color: ${(props) => props.theme.colors.almost_grey};
  margin: 10px 0;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.colors.almost_grey};
  width: 100%;
  height: 20rem;
  font-size: 16px;
  box-sizing: border-box;
  line-height: 1.5rem;

  &:focus {
    outline: none;
  }
`;

export default function TextareaComponent({ type, value, onChange }) {
  return <Textarea type={type} value={value} onChange={onChange}></Textarea>;
}
