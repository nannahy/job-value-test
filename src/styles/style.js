import styled, { css } from "styled-components";

export const colors = {
  blue50: "#E1F5FE",
  blue100: "#80D8FF",
  blue700: "#0091EA",
  gray100: "#F5F5F5",
  gray400: "#BDBDBD",
  gray600: "#757575",
  gray800: "#424242",
};

export const Line = styled.div`
  height: 0.5px;
  width: 100%;
  background: ${colors.gray400};
`;

export const Hover = css`
  background: ${colors.blue50};
`;

export const clicked = css`
  border: 1px solid ${colors.blue700};
  color: ${colors.blue700};
  background: ${colors.blue50};
  font-weight: 600;
`;

export const boxStyle1 = css`
  border: 1px solid ${colors.blue700};
  border-radius: 8px;
`;
