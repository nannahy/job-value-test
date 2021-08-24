import styled, { css } from "styled-components";
import { fontStyle3, fontStyle2 } from "./fontStyle";

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

export const disable = css`
  border: 1px solid ${colors.gray400};
  color: ${colors.gray400};
`;

export const clicked = css`
  border: 1px solid ${colors.blue700};
  color: ${colors.blue700};
  background: ${colors.blue50};
  font-weight: 600;
`;

export const btnHover = css`
  background: ${colors.blue50};
`;

export const boxStyle1 = css`
  border: 1px solid ${colors.blue700};
  border-radius: 8px;
`;

export const BasicContainer = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const BasicContainer2 = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;

export const TitleStyle1 = css`
  ${fontStyle2};
  color: ${colors.gray800};
`;

export const ButtonStyle1 = css`
  height: 60px;
  padding: 0 40px;
  ${fontStyle3};
  border: 1px solid ${colors.blue700};
  border-radius: 8px;
  color: ${colors.blue700};
  background: white;

  &:hover {
    ${({ disabled }) => !disabled && btnHover}
  }

  ${({ disabled }) => disabled && disable}
`;

/* test components */

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Content = styled.p``;

// export const InputRadio = styled.input.attrs({type: 'radio'})`
//     opacity: 0;
// `;

// const Laber = styled.label`
// `;

// const selectBox = (idx, question, questionScore) => {
//     <label><input type='radio' value={questionScore} />{question}</label>
// }

export const Footer = styled.div`
  padding: 10px 0 30px 0;
  display: flex;
  justify-content: space-between;
  position: sticky;
  bottom: 0;
  background: white;
`;
