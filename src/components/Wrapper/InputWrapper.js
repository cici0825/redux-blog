import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../../constants/breakpoint";
import picture from "../../images/input.jpg";

const WrapperWrapper = styled.div`
  margin: 0 auto;
  margin-top: 95px;
  padding: 32px;
  min-height: calc(100vh - 48px - 95px);
  background: white;
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERY_MD} {
    max-width: 600px;
    box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.4);
    margin-top: 110px;
    margin-bottom: 32px;
    min-height: 0px;
    flex-direction: row;
  }
`;

const Picture = styled.div`
  min-width: 100%;
  min-height: 300px;
  background: url(${picture});
  background-size: cover;
  margin-bottom: 18px;

  ${MEDIA_QUERY_MD} {
    margin-bottom: 0;
    min-width: 30%;
    margin-right: 32px;
  }
`;

export default function InputWrapper({ children }) {
  return (
    <WrapperWrapper>
      <Picture />
      {children}
    </WrapperWrapper>
  );
}
