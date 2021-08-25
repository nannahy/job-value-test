/* eslint-disable no-unused-expressions */
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../redux/Toolkit";
import { BasicContainer1, Body, Footer } from "../components/Containers";
import TestHeader from "../components/TestHeader";
import QuestionBox from "../components/QuestionBox";
import { Button2 } from "../components/Buttons";

const fetch = async () => {
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
    question: item.question,
  }));
  return qObjList;
};

const Test = () => {
  const history = useHistory();
  const [currPage, setCurrPage] = useState(1);
  const [questionList, setQuestionList] = useState();

  const answer = useSelector(state => state.answer);
  const dispatch = useDispatch();

  const firstQNum = (currPage - 1) * 5 + 1;
  const lastQNum = currPage * 5;
  const pageQuestion = questionList
    ? questionList.slice(firstQNum - 1, lastQNum)
    : [];

  useEffect(() => {
    fetch().then(setQuestionList);
  }, []);

  const optionClick = (qNum, score) => {
    const newAnswer = { ...answer, [qNum]: score };
    dispatch(addAnswer(newAnswer));
  };

  const prevClick = () => {
    window.scrollTo(0, 0);
    currPage === 1 && history.push("/test-example");
    setCurrPage(curr => curr - 1);
  };

  const nextClick = () => {
    window.scrollTo(0, 0);
    const lastPage = Math.ceil(questionList.length / 5);
    currPage === lastPage && history.push("./test-finished");
    setCurrPage(curr => curr + 1);
  };

  const checkActive = () => {
    const inThisPage = i => firstQNum <= i && i <= lastQNum;
    const realAnswer = Object.keys(answer).slice(1);
    const checkCounter = realAnswer.filter(i => inThisPage(i));
    return checkCounter.length !== pageQuestion.length;
  };

  const getPercentile = () => {
    const realAnswer = Object.keys(answer).slice(1);
    return !questionList
      ? 0
      : Math.ceil((realAnswer.length / questionList.length) * 100);
  };

  return (
    <BasicContainer1>
      <TestHeader title="검사진행" percentile={getPercentile()} />
      <Body>
        {questionList &&
          pageQuestion.map(item => (
            <QuestionBox
              key={item.qNum}
              qNum={item.qNum}
              question={item.question}
              option1={item.option1}
              option2={item.option2}
              desc1={item.desc1}
              desc2={item.desc2}
              score1={item.score1}
              score2={item.score2}
              optionClick={optionClick}
              answer={answer}
            />
          ))}
      </Body>
      <Footer>
        <Button2 type="button" name="prev" onClick={() => prevClick()}>
          이전
        </Button2>
        <Button2
          type="button"
          name="next"
          disabled={checkActive()}
          onClick={() => nextClick()}
        >
          다음
        </Button2>
      </Footer>
    </BasicContainer1>
  );
};

export default Test;
