/* eslint-disable no-unused-expressions */
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../redux/Toolkit";
import {
  TestContainer,
  Header,
  Title,
  ProgressPercentile,
  ProgressBar,
  Body,
} from "../components/style";
import QuestionBox from "../components/QuestionBox";
import PrevNextBtn from "../components/PrevNextBtn";

const Test = () => {
  const history = useHistory();
  const [currPage, setCurrPage] = useState(1);
  const [questionList, setQuestionList] = useState([]);

  const answer = useSelector(state => state.answer);
  const dispatch = useDispatch();

  const firstQNum = (currPage - 1) * 5 + 1;
  const lastQNum = currPage * 5;
  const pageQuestion = questionList.slice(firstQNum - 1, lastQNum);

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

  useEffect(() => {
    fetch().then(setQuestionList);
  }, []);

  const optionClick = (qNum, score) => {
    const newAnswer = { ...answer, [qNum]: score };
    dispatch(addAnswer(newAnswer));
  };

  const PrevClick = () => {
    currPage === 1 && history.push("/test-example");
    setCurrPage(curr => curr - 1);
  };

  const NextClick = () => {
    const lastPage = Math.ceil(questionList.length / 5);
    currPage === lastPage && history.push("./test-finished");
    setCurrPage(curr => curr + 1);
  };

  const handleBtnClick = e => {
    window.scrollTo(0, 0);
    if (e.target.name === "prev") {
      PrevClick();
    } else {
      NextClick();
    }
  };

  const checkActive = () => {
    const inThisPage = i => firstQNum <= i && i <= lastQNum;
    const checkCounter = Object.keys(answer).filter(i => inThisPage(i));
    return checkCounter.length !== pageQuestion.length;
  };

  const percentile = Math.ceil(
    (Object.values(answer).length / questionList.length) * 100,
  );

  return (
    <TestContainer>
      <Header>
        <Title>검사진행</Title>
        <ProgressPercentile>{percentile}%</ProgressPercentile>
        <ProgressBar progressRate={percentile} />
      </Header>
      <Body>
        <PageContent pageQuestion={pageQuestion} optionClick={optionClick} />
      </Body>
      <PrevNextBtn handleClick={handleBtnClick} checkActive={checkActive} />
    </TestContainer>
  );
};

export default Test;

const PageContent = ({ pageQuestion, optionClick }) => {
  const answer = useSelector(state => state.answer);

  if (pageQuestion) {
    const contentList = pageQuestion.map(item => (
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
    ));
    return contentList;
  }
  return <div />;
};
