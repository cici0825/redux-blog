import styled from "styled-components";
import { ReactComponent as LoadingSVG } from "../../images/loading.svg";

const LoadingWrapper = styled.div`
  display: flex;
  justify-contents: center;
  text-align: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

export default function Loading() {
  return (
    <LoadingWrapper>
      <LoadingSVG />
    </LoadingWrapper>
  );
}
