import styled from "styled-components";
import { NormalWrapper } from "../../components/Wrapper";
import picture from "../../images/me.jpg";
import Orange from "../../components/Span";

const Photo = styled.div`
  height: 250px;
  width: 250px;
  background: url(${picture});
  border-radius: 50%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  margin-top: 36px;
  text-align: center;
`;

export default function AboutPage() {
  return (
    <NormalWrapper>
      <Photo />
      <Title>
        About <Orange>M</Orange>e
      </Title>
      <p>生菜。正在練習用 react 和 redux 做部落格。</p>
      <p>興趣雜食，喜愛一切有趣的事物。</p>
      <p>
        過了可以簽契約變成魔法少女的年紀，於是只能努力成為溫柔又強大的工程師。
      </p>
    </NormalWrapper>
  );
}
