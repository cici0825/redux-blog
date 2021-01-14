import styled from "styled-components";

const Orange = styled.span`
  color: ${(props) => props.theme.colors.orange};
`;

export default function OrangeSpan({ children }) {
  return <Orange>{children}</Orange>;
}
