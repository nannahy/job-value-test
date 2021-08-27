import { css } from "styled-components";
import { colors, clicked, Hover } from "./style";
import { boxFont3, boxFont1 } from "./fontStyle";

export const infoLabel = css`
  box-sizing: border-box;
  flex-grow: 1;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${colors.gray400};
  ${boxFont3};
  text-align: center;
  line-height: 40px;
  ${({ checked }) => checked && clicked}

  + label {
    margin-left: 10px;
  }

  &:hover {
    ${({ disabled }) => !disabled && Hover}
  }

  > input {
    display: none;
  }
`;

export const testLabel = css`
  box-sizing: border-box;
  flex-grow: 1;
  border-radius: 8px;
  border: 1px solid ${colors.gray400};
  ${boxFont1};
  text-align: center;
  height: 64px;
  margin: 20px 0;
  line-height: 64px;

  ${props => props.defaultChecked && clicked};

  &:hover {
    ${Hover};
  }

  > input {
    display: none;
  }
`;
