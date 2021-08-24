import { css } from "styled-components";
import { colors, clicked, btnHover } from "./style";
import { fontStyle4 } from "./fontStyle";

export const Label = css`
  box-sizing: border-box;
  flex-grow: 1;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${colors.gray400};
  ${fontStyle4};
  color: ${colors.gray800};
  text-align: center;
  line-height: 40px;
  ${({ checked }) => checked && clicked}

  + label {
    margin-left: 10px;
  }

  &:hover {
    ${({ disabled }) => !disabled && btnHover}
  }
`;

export const InputButton = css`
  width: 0;
  ${({ checked }) => checked && clicked}
`;
