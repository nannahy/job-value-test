import styled from "styled-components";
import {
  fontStyle1,
  fontStyle2,
  fontStyle4,
  fontStyle5,
  fontStyle6,
} from "../styles/fontStyle";
import { colors } from "../styles/style";

export const TitleH1 = styled.h1`
  ${fontStyle1};
  color: ${colors.gray800};
  margin-bottom: 16px;
`;

export const TitleH2 = styled.h2`
  ${fontStyle2};
  color: ${colors.gray600};
`;

export const Title3 = styled.h2`
  ${fontStyle2};
  color: ${colors.gray800};
  margin-bottom: 8px;
`;

export const Title4 = styled.h1`
  ${fontStyle1};
  color: ${colors.gray800};
`;

export const BodyBoldP1 = styled.p`
  ${fontStyle4};
  color: ${colors.gray800};
`;

export const BodyBoldP2 = styled.p`
  ${fontStyle4};
  color: ${colors.gray600};
`;

export const BodyP1 = styled.p`
  ${fontStyle5};
  color: ${colors.gray800};
`;

export const BodyP2 = styled.p`
  ${fontStyle5};
  color: ${colors.gray600};
`;

export const DescP = styled.p`
  ${fontStyle6};
  color: ${colors.gray600};
`;

export const HighLight = styled.span`
  ${fontStyle4};
  color: ${colors.blue700};
`;

export const LowLight = styled.span`
  ${fontStyle4};
  color: ${colors.gray400};
`;

export const Bold = styled.span`
  font-weight: 600;
`;