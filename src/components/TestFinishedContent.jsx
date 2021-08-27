import styled from "styled-components";
import { fontStyle4, fontStyle5 } from "../styles/fontStyle";
import { colors } from "../styles/style";
import { Title3 } from "./Fonts";

const BodyText = styled.p`
  ${fontStyle5};
  color: ${colors.gray800};
  margin: 14px 0 56px 0;
  text-align: center;

  > div {
    height: 8px;
  }
`;

export const HighLight = styled.span`
  ${fontStyle4};
  color: ${colors.blue700};
`;

export const LowLight = styled.span`
  ${fontStyle4};
  color: ${colors.gray400};
`;

export const Bold = styled.span`
  font-weight: 600;
`;

const TestFinishedContent = ({ name, highScoreValue, lowScoreValue }) => {
  return (
    <>
      <Title3>검사가 완료되었습니다.</Title3>
      <BodyText>
        검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게
        생각하는지를 알려주고,
        <br />
        중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
        <div />
        직업생활과 관련하여 <Bold>{name}</Bold>님은&nbsp;
        <HighLight>{highScoreValue[0]}</HighLight>(와)과&nbsp;
        <HighLight>{highScoreValue[1]}</HighLight>(을)를 가장 중요하게
        생각합니다.
        <br />
        반면에 <LowLight>{lowScoreValue[0]}</LowLight>
        ,&nbsp;
        <LowLight>{lowScoreValue[1]}</LowLight>(은)는 상대적으로 덜 중요하게
        생각합니다.
      </BodyText>
    </>
  );
};

export default TestFinishedContent;
