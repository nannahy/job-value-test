import { css } from "styled-components";
import { colors, Hover } from "./style";
import { buttonFont } from "./fontStyle";

const disable = css`
  border: 1px solid ${colors.gray400};
  color: ${colors.gray400};
  cursor: default;
`;

const buttonStyle = css`
  height: 60px;
  padding: 0 40px;
  ${buttonFont};
  border: 1px solid ${colors.blue700};
  border-radius: 8px;
  background: white;
  cursor: pointer;

  &:hover {
    ${({ disabled }) => !disabled && Hover}
  }

  ${({ disabled }) => disabled && disable}
`;

export default buttonStyle;
