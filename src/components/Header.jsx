import styled from "styled-components";
import { fontStyle2, fontStyle3, fontStyle4 } from "../styles/fontStyle";
import { boxStyle1, colors } from "../styles/style";

const HeaderBox = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 30px 0 10px 0;
  align-items: end;
  row-gap: 8px;
  position: sticky;
  top: 0;
  background: white;
`;

const Title = styled.h2`
  ${fontStyle2};
  color: ${colors.gray600};
`;
const ProgressPercentile = styled.p`
  ${fontStyle4};
  color: ${colors.gray600};
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

const Header = ({ title, percentile, rate }) => {
  return (
    <HeaderBox>
      <Title>{title}</Title>
      <ProgressPercentile>{percentile}%</ProgressPercentile>
      <ProgressBar progressRate={rate} />
    </HeaderBox>
  );
};

export default Header;
