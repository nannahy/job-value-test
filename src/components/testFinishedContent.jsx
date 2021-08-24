import styled from "styled-components";
import { fontStyle4, fontStyle5 } from "../styles/fontStyle";
import { colors, TitleStyle1 } from "../styles/style";

export const Title = styled.h2`
  ${TitleStyle1}
  margin-bottom: 24px;
`;

const Desc = styled.p`
  ${fontStyle5};
  color: ${colors.gray800};
  text-align: center;
  margin-bottom: 14px;
  + p {
    margin-bottom: 40px;
  }
`;

const HighLight = styled.span`
  ${fontStyle4};
  color: ${colors.blue700};
`;

const LowLight = styled.span`
  ${fontStyle4};
  color: ${colors.gray400};
`;

const Bold = styled.span`
  font-weight: 600;
`;

const TestFinishedContent = ({ userResult, jobValue }) => {
  return (
    <>
      <Title>검사가 완료되었습니다.</Title>
      <Desc>
        검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게
        생각하는지를 알려주고,
        <br />
        중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
      </Desc>
      {userResult && (
        <Desc>
          직업생활과 관련하여 <Bold>{userResult.name}</Bold>님은&nbsp;
          <HighLight>{jobValue[userResult.highScore[0]]}</HighLight>(와)과&nbsp;
          <HighLight>{jobValue[userResult.highScore[1]]}</HighLight>(을)를 가장
          중요하게 생각합니다.
          <br />
          반면에 <LowLight>{jobValue[userResult.lowScore[0]]}</LowLight>
          ,&nbsp;
          <LowLight>{jobValue[userResult.lowScore[1]]}</LowLight>(은)는
          상대적으로 덜 중요하게 생각합니다.
        </Desc>
      )}
    </>
  );
};

export default TestFinishedContent;
