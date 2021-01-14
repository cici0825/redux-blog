import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../../constants/breakpoint";

const WrapperWrapper = styled.div`
  margin: 0 auto;
  margin-top: ${(props) => {
    if (props.location !== "middle") return "95px";
  }};
  padding: 32px;
  min-height: ${(props) => {
    if (props.location !== "middle") return "calc(100vh - 48px - 95px);";
  }};
  background: white;

  ${MEDIA_QUERY_MD} {
    max-width: 600px;
    box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.4);
    margin-top: ${(props) => {
      if (props.location !== "middle") return "110px";
    }};
    margin-bottom: 32px;
    min-height: 0px;
  }
`;

export default function NormalWrapper({ children, location }) {
  return <WrapperWrapper location={location}>{children}</WrapperWrapper>;
}
