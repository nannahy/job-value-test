import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  TestContainer,
  Header,
  Title,
  ProgressPercentile,
  ProgressBar,
  Body,
  Content,
  Footer,
} from "./styledComponents";
import { QuestionBox } from "./components";
import { addAnswer } from "./redux/action";

const Test = () => {
  const history = useHistory();
  const [questionList, setQuestionList] = useState([]);
  const [userAnswer, setUserAnswer] = useState({});
  const answer = useSelector(state => state.answer);
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line func-names
    (async function () {
      const response = await axios.get(
        "https://www.career.go.kr/inspct/openapi/test/questions?apikey=91ba033859063edfb432487e1853ddb1&q=6",
      );

      const qList = response.data.RESULT;
      const qObjList = qList.map(item => ({
        qNum: item.qitemNo,
        option1: item.answer01,
        option2: item.answer02,
        desc1: item.answer03,
        desc2: item.answer04,
        score1: item.answerScore01,
        score2: item.answerScore02,
      }));

      setQuestionList(qObjList);
    })();
  }, []);

  const optionClick = (idx, value) => {
    const newAnswer = { ...userAnswer };
    newAnswer[idx] = `B${idx}=${value}`;
    setUserAnswer(newAnswer);
    dispatch(addAnswer(userAnswer));
  };

  const checked = qNum => {
    // answer에 자신의 qNum이 존재하는가? true : false
    if (answer[qNum]) {
      const a = answer[qNum].split("=")[1];
      return { bool: true, answerScore: a };
    }
    return { bool: false, answerScore: null };
  };

  // eslint-disable-next-line no-unused-vars
  const checkActive = () => {
    return questionList.length !== Object.keys(userAnswer).length;
  };

  const handleClick = e => {
    // eslint-disable-next-line no-unused-expressions
    e.target.name === "prev"
      ? history.push("/test-example")
      : history.push("./test-finished");
  };

  return (
    <TestContainer>
      <Header>
        <Title>검사진행</Title>
        <ProgressPercentile>0%</ProgressPercentile>
        <ProgressBar progressRate="33" />
      </Header>
      <Body>
        <Content>
          직업과관련된 두 개의 가치 중에서 자신에게 더 중요한 가치에 표시하세요.
        </Content>
        {questionList.map(item => (
          <QuestionBox
            key={item.qNum}
            qNum={item.qNum}
            option1={item.option1}
            option2={item.option2}
            desc1={item.desc1}
            desc2={item.desc2}
            score1={item.score1}
            score2={item.score2}
            optionClick={optionClick}
            checked={checked(item.qNum)}
            div={item}
          />
        ))}
      </Body>
      <Footer>
        <button type="button" name="prev" onClick={e => handleClick(e)}>
          이전
        </button>
        <button
          type="button"
          name="next"
          disabled={checkActive()}
          onClick={e => handleClick(e)}
        >
          다음
        </button>
      </Footer>
    </TestContainer>
  );
};

export default Test;
