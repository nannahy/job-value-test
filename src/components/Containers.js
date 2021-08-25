import styled from "styled-components";

export const BasicContainer1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BasicContainer2 = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Header = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr auto;
  padding: 30px 0 10px 0;
  align-items: end;
  row-gap: 8px;
  position: sticky;
  top: 0;
  background: white;
`;

export const BasicHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

export const Footer = styled.div`
  padding: 10px 0 30px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: sticky;
  bottom: 0;
  background: white;
`;

export const BasicFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0 60px 0;
`;
