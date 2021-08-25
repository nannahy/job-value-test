import { css } from "styled-components";
import { colors } from "./style";

export const fontStyle1 = css`
  font-size: 36px;
  font-weight: 500;
`;

export const fontStyle2 = css`
  font-size: 24px;
  font-weight: 500;
`;

export const fontStyle3 = css`
  font-weight: 600;
  font-size: 18px;
`;

export const fontStyle4 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
`;

export const fontStyle5 = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`;

export const fontStyle6 = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const buttonFont = css`
  ${fontStyle3};
  color: ${colors.blue700};
`;

export const boxFont1 = css`
  ${fontStyle3};
  color: ${colors.gray800};
`;

export const boxFont2 = css`
  ${fontStyle3};
  color: ${colors.gray600};
`;

export const boxFont3 = css`
  ${fontStyle4}
  color: ${colors.gray800};
`;
