import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import Button from "../components/Buttons";
import TestFinishedContent from "../components/TestFinishedContent";
import { BasicContainer2 } from "../components/Containers";
import { setResult } from "../redux/Toolkit";

const getAnswerString = answer => {
  const realAnswer = Object.values(answer).slice(1);
  const answerString = realAnswer
    .map((value, i) => `B${i + 1}=${value}`)
    .join(" ");
  return answerString;
};

const getTimeStamp = () => {
  return Date.now();
};

const getGender = gender => {
  const genderMap = { male: "100323", female: "100324" };
  return genderMap[gender];
};

const getData = (name, gender, timeStamp, answerString) => ({
  apikey: "91ba033859063edfb432487e1853ddb1",
  qestrnSeq: "6",
  trgetSe: "100209",
  name: name,
  gender: gender,
  school: "",
  grade: "",
  email: "",
  startDtm: timeStamp,
  answers: answerString,
});

const jobValue = {
  1: "능력발휘",
  2: "자율성",
  3: "보수",
  4: "안정성",
  5: "사회적 인정",
  6: "사회봉사",
  7: "자기계발",
  8: "창의성",
};

const editResult = (responseData, jobValue) => {
  const getDate = endDtm => {
    return endDtm.split("T")[0];
  };

  const parseResult = wonScore => {
    const resultList = wonScore.trim().split(" ");

    const getList = item => {
      const items = item.split("=");
      return [items[0], items[1]];
    };

    const resultDraft = resultList.map(item => getList(item));
    const result = resultDraft
      .map(item => [item[0], jobValue[item[0]], item[1]])
      .sort((a, b) => b[2] - a[2]);
    return result;
  };

  const name = responseData.user.name;
  const gender = responseData.user.grade === "100323" ? "남자" : "여자";
  const endDtm = responseData.result.endDtm;
  const date = getDate(endDtm);
  const wonScore = responseData.result.wonScore;
  const result = parseResult(wonScore);
  const highScoreKey = result.slice(0, 2).map(item => item[0]);
  const lowScoreKey = result.slice(-2).map(item => item[0]);
  const highScoreValue = result.slice(0, 2).map(item => item[1]);
  const lowScoreValue = result.slice(-2).map(item => item[1]);

  return {
    name,
    gender,
    date,
    result,
    highScoreKey,
    highScoreValue,
    lowScoreKey,
    lowScoreValue,
  };
};

const getResult = async seqKey => {
  const response = await axios.get(
    `https://www.career.go.kr/inspct/api/psycho/report?seq=${seqKey}`,
  );
  const result = editResult(response.data, jobValue);
  return result;
};

const fetch = async data => {
  try {
    const response = await axios.post(
      "https://www.career.go.kr/inspct/openapi/test/report",
      data,
    );
    const seqKey = response.data.RESULT.url.split("=")[1];
    const result = await getResult(seqKey);
    return { ...result };
  } catch (e) {
    console.log(e);
  }
};

const TestFinished = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const name = useSelector(state => state.name);
  const answer = useSelector(state => state.answer);
  const gender = useSelector(state => state.gender);
  const result = useSelector(state => state.result);

  useEffect(() => {
    fetch(
      getData(name, getGender(gender), getTimeStamp(), getAnswerString(answer)),
    ).then(result => dispatch(setResult(result)));
  }, []);

  console.log(result);

  return (
    <BasicContainer2>
      {result && (
        <TestFinishedContent
          name={name}
          highScoreValue={result.highScoreValue}
          lowScoreValue={result.lowScoreValue}
        />
      )}
      <Button onClick={() => history.push("/result")}>결과보기</Button>
    </BasicContainer2>
  );
};

export default TestFinished;
