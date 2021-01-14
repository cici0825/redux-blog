import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

const FooterWord = styled.div`
  margin: 0 auto;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWord>2021 made by v61265</FooterWord>
    </FooterContainer>
  );
}
