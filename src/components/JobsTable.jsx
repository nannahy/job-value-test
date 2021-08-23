import styled from "styled-components";

const Table = styled.table`
  border: 1px solid black;
`;

const JobsTable = ({ data }) => {
  const makeList = item => {
    const content = data[item].join(", ");
    return (
      <tr key={item}>
        <td>{item}</td>
        <td>{content}</td>
      </tr>
    );
  };
  const jobList = Object.keys(data).map(item => makeList(item));

  // objList.forEach(item => )
  return (
    <Table>
      <thead>
        <th>분야</th>
        <th>직업</th>
      </thead>
      <tbody>{jobList}</tbody>
    </Table>
  );
};

export default JobsTable;
