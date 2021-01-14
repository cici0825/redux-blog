import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PaginationButton = styled(Link)`
  width: 24px;
  height: 24px;
  text-align: center;
  color: black;
  border: 1px solid black;
  background: white;
  text-decoration: none;

  &:hover {
    background: black;
    color: white;
  }

  & + & {
    margin-left: 5px;
  }

  ${(props) =>
    props.$active &&
    `
  background: black;
  color: white;`}
`;

const PaginationWrapper = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export default function Pagination({ num }) {
  const location = useLocation().pathname;
  console.log(num);
  return (
    <PaginationWrapper>
      {new Array(num).fill("").map((item, index) => {
        return (
          <PaginationButton
            key={index}
            to={`/posts/${index + 1}`}
            $active={
              location === `/posts/${index + 1}` ||
              (location === "/" && index === 0)
            }
          >
            {index + 1}
          </PaginationButton>
        );
      })}
    </PaginationWrapper>
  );
}
