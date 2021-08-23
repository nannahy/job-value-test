import styled from "styled-components";

const Table = styled.table`
  border: 1px solid black;
`;

const UserInfoTable = ({ data }) => {
  return (
    <Table>
      <thead>
        <th>이름</th>
        <th>성별</th>
        <th>검사일</th>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.gender}</td>
          <td>{data.date}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UserInfoTable;
