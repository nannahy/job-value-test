import styled, { css } from "styled-components";
import { colors } from "../styles/style";
import {
  boxFont1,
  fontStyle1,
  fontStyle2,
  fontStyle3,
  fontStyle4,
  fontStyle5,
} from "../styles/fontStyle";

const borderStyle = css`
  /* border-top: 1px solid ${colors.blue700};
  border-bottom: 1px solid ${colors.blue700}; */
  border-left: 8px solid white;
  border-right: 8px solid white;
`;

const borderStyleLight = css`
  border-top: 0.5px solid ${colors.gray400};
  border-bottom: 0.5px solid ${colors.gray400};
  border-left: 8px solid white;
  border-right: 8px solid white;
`;

export const Title = styled.h2`
  ${fontStyle1};
  border-bottom: 0.5px solid ${colors.gray400};
  padding: 8px 0;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
`;

const ResultTitle = styled.p`
  ${fontStyle2};
  color: ${colors.gray800};
  width: 100%;
  padding: 10px 0;
`;

const TableTitle = styled.p`
  ${boxFont1};
  width: 100%;
  padding: 15px 0;
  text-align: center;
  background: ${colors.gray100};
  border-radius: 8px;
  margin-top: 10px;
`;

const Table = styled.table`
  width: 100%;
  margin: 5px 0 40px 0;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  ${fontStyle4};
  color: ${colors.gray800};
`;

const InfoTh = styled.th`
  ${borderStyle};
  border-top: 0.5px solid ${colors.gray400};
  padding: 10px 0;
`;

const Th = styled.th`
  ${borderStyle};
  padding: 10px 0;
`;

const ItemTd = styled.td`
  ${borderStyleLight};
  ${fontStyle4};
  text-align: center;
  color: ${colors.gray600};
  width: 150px;
`;

const InfoTd = styled.td`
  ${borderStyleLight};
  ${fontStyle4};
  color: ${colors.gray600};
  padding: 10px 20px;
  text-align: center;
`;

const ContentTd = styled.td`
  ${borderStyleLight};
  ${fontStyle5};
  color: ${colors.gray600};
  padding: 10px 20px;
`;

const ResultTable = ({ result, jobEdu, jobMajor }) => {
  return (
    <TableContainer>
      <UserInfoTable data={result} />
      <ResultTitle>직업가치관 결과</ResultTitle>
      <ResultTitle>가치관과 관련이 높은 직업</ResultTitle>
      <TableTitle>종사자 평균 학력별</TableTitle>
      <JobsTable data={jobEdu} />
      <TableTitle>종사자 평균 전공별</TableTitle>
      <JobsTable data={jobMajor} />
    </TableContainer>
  );
};

const UserInfoTable = ({ data }) => {
  return (
    <Table>
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
    </Table>
  );
};

const JobsTable = ({ data }) => {
  const makeList = item => {
    const content = data[item].join(", ");
    return (
      <tr key={item}>
        <ItemTd>{item}</ItemTd>
        <ContentTd>{content}</ContentTd>
      </tr>
    );
  };
  const jobList = Object.keys(data).map(item => makeList(item));

  // objList.forEach(item => )
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

export default ResultTable;
