import styled from "styled-components";
import { boxFont2 } from "../styles/fontStyle";
import { colors } from "../styles/style";
import { TitleH2 } from "./Fonts";
import { Header } from "./Containers";

const ProgressPercentile = styled.p`
  ${boxFont2};
`;

const ProgressStatus = styled.div`
  grid-column: 1 / span 2;
  background: ${colors.gray100};
  width: ${({ progressRate }) =>
    progressRate ? progressRate.progressRate : 100}%;
  height: 3px;
  border-radius: 1.5px;
  position: relative;

  > div {
    background: ${colors.blue700};
    position: absolute;
  }
`;

const ProgressBar = progressRate => {
  return (
    <>
      <ProgressStatus>
        <ProgressStatus progressRate={progressRate} />
      </ProgressStatus>
    </>
  );
};

const TestHeader = ({ title, percentile }) => {
  return (
    <Header>
      <TitleH2>{title}</TitleH2>
      <ProgressPercentile>{percentile}%</ProgressPercentile>
      <ProgressBar progressRate={percentile} />
    </Header>
  );
};

export default TestHeader;
