import styled, { css } from "styled-components";
import { colors } from "../styles/style";
import { boxFont1, fontStyle4, fontStyle5 } from "../styles/fontStyle";

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
  background: ${colors.gray100};
  margin-top: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const InfoTable = styled.table`
  width: 100%;
  border-spacing: 8px 0;
  margin-bottom: 30px;
`;

const InfoTh = styled.th`
  padding: 10px 0;
  background: ${colors.gray100};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  margin-bottom: 30px;
`;

const Thead = styled.thead`
  ${fontStyle4};
  color: ${colors.gray800};
`;

const Th = styled.th`
  padding: 10px 0;
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
