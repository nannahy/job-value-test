import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Body, Footer } from "../styles/style";
import TestContainer from "../components/TestContainer";
import Header from "../components/Header";
import QuestionBox from "../components/QuestionBox";
import { TestStartButton } from "../components/PrevNextBtn";

const TestExample = () => {
  const history = useHistory();
  const [lock, setLock] = useState(true);

  return (
    <TestContainer>
      <Header
        title="검사예시"
        percentile={lock ? 0 : 100}
        rate={lock ? 0 : 100}
      />
      <Body>
        <QuestionBox
          key="0"
          qNum="0"
          option1="능력발휘"
          option2="자율성"
          desc1="직업을 통해 자신의 능력을 발휘하는 것입니다."
          desc2="일하는 시간과 방식에 대해서 스스로 결정할 수 있는 것입니다."
          optionClick={() => setLock(false)}
          answer={{ 0: 0 }}
          question="직업과 관련된 두 개의 가치 중에서 자신에게 더 중요한 가치에 표시하세요.
          가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요."
        />
      </Body>
      <Footer>
        <TestStartButton
          type="button"
          onClick={() => history.push("/test")}
          disabled={lock}
        >
          검사하기
        </TestStartButton>
      </Footer>
    </TestContainer>
  );
};

export default TestExample;
