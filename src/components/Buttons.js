import buttonStyle from "../styles/buttonStyle";
import styled from "styled-components";

const Button = styled.button`
  ${buttonStyle};
  justify-self: center;
  margin: 0 auto;
  cursor: pointer;
`;

export const Button2 = styled.button`
  ${buttonStyle};
  width: 200px;
  cursor: pointer;
`;

export default Button;
