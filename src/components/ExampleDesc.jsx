import styled from "styled-components";
import { BodyP2, Bold } from "./Fonts";
import { colors } from "../styles/style";
import { fontStyle3, fontStyle4 } from "../styles/fontStyle";

const DescBox = styled.div`
  border-bottom: 0.5px solid ${colors.gray400};
  padding: 0 20px 40px;
  margin-bottom: 40px;
  > div {
    height: 8px;
  }
`;

const Title = styled.p`
  ${fontStyle3};
  color: ${colors.blue700};
  margin-bottom: 16px;
`;

const Alert = styled.p`
  ${fontStyle4};
  color: ${colors.blue700};
`;

const ExampleDesc = () => {
  return (
    <DescBox>
      <BodyP2>
        <Bold>
          직업과 관련된 두 개 가치 중에서 자기에게 더 중요한 가치에 표시
        </Bold>
        하세요.
        <br />
        가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요
      </BodyP2>
      <div />
      <BodyP2>
        만약 ‘능력발휘’보다 ‘자율성’이 더 중요하다면 ‘자율성’을 체크하세요.
        <br />
        반대로, ‘능력발휘’가 ‘자율성’보다 중요하다면 ‘능력발휘’에 체크하세요.
      </BodyP2>
      <div />
      <Alert>모든 문항을 선택해야 다음 페이지로 넘어갈 수 있습니다.</Alert>
    </DescBox>
  );
};

export default ExampleDesc;
