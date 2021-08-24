import { useHistory } from "react-router-dom";
import { Body, Footer } from "../styles/style";
import TestContainer from "../components/TestContainer";
import Header from "../components/Header";
import QuestionBox from "../components/QuestionBox";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../redux/Toolkit";

const TestExample = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const answer = useSelector(state => state.answer);

  const optionClick = (qNum, score) => {
    const newAnswer = { ...answer, [qNum]: score };
    dispatch(addAnswer(newAnswer));
  };

  const checkActiveExam = () => {
    return answer[0] ? false : true;
  };

  console.log(answer);

  return (
    <TestContainer>
      <Header
        title="검사예시"
        percentile={answer[0] ? 100 : 0}
        rate={answer[0] ? 100 : 0}
      />
      <Body>
        <QuestionBox
          key="0"
          qNum="0"
          option1="능력발휘"
          option2="자율성"
          score1="01"
          score2="02"
          desc1="직업을 통해 자신의 능력을 발휘하는 것입니다."
          desc2="일하는 시간과 방식에 대해서 스스로 결정할 수 있는 것입니다."
          optionClick={optionClick}
          answer={answer}
          question="직업과 관련된 두 개의 가치 중에서 자신에게 더 중요한 가치에 표시하세요.
          가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요."
        />
      </Body>
      <Footer>
        <Button
          type="button"
          onClick={() => history.push("/test")}
          disabled={checkActiveExam()}
        >
          검사하기
        </Button>
      </Footer>
    </TestContainer>
  );
};

export default TestExample;
