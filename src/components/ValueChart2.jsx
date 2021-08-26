import styled from "styled-components";
import { fontStyle4 } from "../styles/fontStyle";
import { colors } from "../styles/style";

const ChartContainer = styled.div`
  position: relative;
  margin-top: 16px;
`;

const Table = styled.table`
  height: 400px;
  width: 100%;
  border: 0.5px solid ${colors.gray300};
  border-collapse: collapse;
`;

const DatasBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 400px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

const Td = styled.td`
  border: 0.5px solid ${colors.gray300};
`;

const Tr = styled.tr`
  border: 0.5px solid ${colors.gray300};
`;

const ValuesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin: 10px 0 60px;
`;

const P = styled.p`
  text-align: center;
  width: 100%;
  ${fontStyle4};
  color: ${colors.gray600};
`;

const Bar = styled.div`
  width: 90px;
  height: ${({ score }) => score * 40}px;
  background: rgba(0, 145, 234, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const getLabels = data => data.map(item => item[1]);
const getScores = data => data.map(item => Number(item[2]));

const TableBox = () => {
  const hor = Array(8)
    .fill("")
    .map(item => <Td></Td>);
  const ver = Array(10)
    .fill("")
    .map(item => <Tr>{hor}</Tr>);

  return <Table>{ver}</Table>;
};

const Datas = ({ data }) => {
  const bars = data.map(score => <Bar score={score} />);
  return <DatasBox>{bars}</DatasBox>;
};

const Values = ({ data }) => {
  const value = data.map(value => <P>{value}</P>);
  return <ValuesBox>{value}</ValuesBox>;
};

const ValueChart2 = ({ valueData }) => {
  const data = [...valueData].sort();

  return (
    <ChartContainer>
      <TableBox />
      <Datas data={getScores(data)} />
      <Values data={getLabels(data)} />
    </ChartContainer>
  );
};

export default ValueChart2;
