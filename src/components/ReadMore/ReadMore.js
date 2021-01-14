import styled from "styled-components";
import { Link } from "react-router-dom";

const ReadMore = styled(Link)`
  color: ${(props) => props.theme.colors.orange};
  font-size: ${(props) => {
    if (props.size !== "small") {
      return props.theme.font.md;
    } else {
      return props.theme.font.sm;
    }
  }}px;
  font-weight: ${(props) => {
    if (props.size !== "small") return "bold";
  }};
  margin: 5px;
  text-decoration: none;

  &:hover {
    color: #ffa78d;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }
`;

export default function ReadmoreComponent({ to, size }) {
  return (
    <ReadMore to={to} size={size}>
      Read More
    </ReadMore>
  );
}
