import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  QuestionBox,
  TestContainer,
  Header,
  Title,
  ProgressPercentile,
  ProgressBar,
  Body,
  Content,
  Footer,
  Button,
} from "./components";

const TestExample = () => {
  const history = useHistory();
  const [lock, setLock] = useState(true);

  return (
    <TestContainer>
      <Header>
        <Title>검사예시</Title>
        <ProgressPercentile>{lock ? "0%" : "100%"}</ProgressPercentile>
        <ProgressBar progressRate={lock ? 0 : 100} />
      </Header>
      <Body>
        <Content>
          직업과관련된 두 개의 가치 중에서 자신에게 더 중요한 가치에 표시하세요.
          가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.
        </Content>
        <QuestionBox
          key="0"
          qNum="0"
          option1="능력발휘"
          option2="자율성"
          desc1="직업을 통해 자신의 능력을 발휘하는 것입니다."
          desc2="일하는 시간과 방식에 대해서 스스로 결정할 수 있는 것입니다."
          optionClick={() => setLock(false)}
          checked={{ bool: false, answerScore: null }}
        />
      </Body>
      <Footer>
        <Button
          type="button"
          onClick={() => history.push("/test")}
          disabled={lock}
        >
          검사하기
        </Button>
      </Footer>
    </TestContainer>
  );
};

export default TestExample;
