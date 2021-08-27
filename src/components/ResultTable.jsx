import styled, { css } from "styled-components";
import { colors } from "../styles/style";
import { boxFont1, fontStyle4, fontStyle5 } from "../styles/fontStyle";
import { BodyP2, Bold, HighLight, LowLight } from "./Fonts";

const borderStyleLight = css`
  border-top: 0.5px solid ${colors.gray300};
  border-bottom: 0.5px solid ${colors.gray300};
  border-left: 8px solid white;
  border-right: 8px solid white;
`;

export const TableTitle = styled.p`
  ${boxFont1};
  width: 100%;
  padding: 15px 0;
  text-align: center;
  color: ${colors.blue700};
  background: ${colors.blue50};
  margin-top: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const InfoTable = styled.table`
  width: 100%;
  border-spacing: 8px 0;
  margin: 24px 0 60px;
`;

const InfoTh = styled.th`
  padding: 10px 0;
  background: ${colors.blue50};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: ${colors.blue700};
`;

const InfoTd = styled.td`
  ${borderStyleLight};
  border-top: none;
  ${fontStyle4};
  color: ${colors.gray600};
  padding: 10px 20px;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
`;

const Thead = styled.thead`
  ${fontStyle4};
  color: ${colors.gray800};
`;

const Th = styled.th`
  padding: 12px 0;
`;

const KeyTd = styled.td`
  ${borderStyleLight};
  ${fontStyle4};
  text-align: center;
  color: ${colors.gray600};
  width: 150px;
`;

const ValueTd = styled.td`
  ${borderStyleLight};
  ${fontStyle5};
  color: ${colors.gray600};
  padding: 10px 20px;
`;

export const UserInfoTable = ({ data }) => {
  return (
    <InfoTable>
      <Thead>
        <InfoTh>이름</InfoTh>
        <InfoTh>성별</InfoTh>
        <InfoTh>검사일</InfoTh>
      </Thead>
      <tbody>
        <tr>
          <InfoTd>{data.name}</InfoTd>
          <InfoTd>{data.gender}</InfoTd>
          <InfoTd>{data.date}</InfoTd>
        </tr>
      </tbody>
    </InfoTable>
  );
};

export const JobsTable = ({ data }) => {
  const makeList = key => {
    const values = data[key].join(", ");
    return (
      <tr key={key}>
        <KeyTd>{key}</KeyTd>
        <ValueTd>{values}</ValueTd>
      </tr>
    );
  };
  const jobList = Object.keys(data).map(key => makeList(key));

  return (
    <Table>
      <Thead>
        <Th>분야</Th>
        <Th>직업</Th>
      </Thead>
      <tbody>{jobList}</tbody>
    </Table>
  );
};

export const ResultText = () => (
  <BodyP2>
    <Bold>
      직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념
    </Bold>
    입니다. 따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을
    한다고 볼 수 있습니다. 직업가치관검사는 여러분이 직업을 선택할 때 상대적으로
    어떠한 가치를 중요하게 생각하는지를 알려줍니다. 또한 본인이 가장 중요하게
    생각하는 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
  </BodyP2>
);

export const GraphText = ({ name, highScoreValue, lowScoreValue }) => (
  <BodyP2>
    직업생활과 관련하여 <Bold>{name}</Bold>님은{" "}
    <HighLight>{highScoreValue[0]}</HighLight>,{" "}
    <HighLight>{highScoreValue[1]}</HighLight>(을)를 가장 중요하게 생각합니다.
    <br />
    반면에 <LowLight>{lowScoreValue[0]}</LowLight>,{" "}
    <LowLight>{lowScoreValue[1]}</LowLight>(은)는 상대적으로 덜 중요하게
    생각합니다.
  </BodyP2>
);

export const JobsText = ({ name, highScoreValue }) => (
  <BodyP2>
    <Bold>{name}</Bold>님이 중요하게 생각하는{" "}
    <HighLight>{highScoreValue[0]}</HighLight>(와)과{" "}
    <HighLight>{highScoreValue[1]}</HighLight>
    (을)를 만족시킬 수 있는 직업은 다음과 같습니다.
  </BodyP2>
);
