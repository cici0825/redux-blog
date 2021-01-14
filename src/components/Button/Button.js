import styled from "styled-components";

const Button = styled.button`
  padding: ${(props) => {
    if (props.size === "medium") return "5px 10px";
  }};
  background: white;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  margin-top: 10px;
  width: ${(props) => {
    if (props.size === "medium") return "100%";
  }};
  box-sizing: border-box;
  min-width: 30px;

  &:hover {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    color: white;
    background: ${(props) => props.color};
    cursor: pointer;
  }

  & + & {
    margin-left: 5px;
  }
`;

export default function Bottun({ size, color, children, onClick }) {
  return (
    <Button size={size} color={color} onClick={onClick}>
      {children}
    </Button>
  );
}
