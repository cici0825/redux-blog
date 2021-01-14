import React from "react";
import styled from "styled-components";

const KanbanContainer = styled.div`
  height: 300px;
  display: flex;
  align-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 0 32px;
  font-size: ${(props) => props.theme.font.xxxl}px;
`;

const GreyWords = styled.span`
  color: ${(props) => props.theme.colors.light_grey};
`;

export default function Kanban() {
  return (
    <KanbanContainer>
      <div>
        <div>
          Lidemy, <GreyWords>let's</GreyWords>
        </div>
        <div>
          <GreyWords>keep learning and</GreyWords>
        </div>
        <div>
          <GreyWords>happy coding.</GreyWords>
        </div>
      </div>
    </KanbanContainer>
  );
}
