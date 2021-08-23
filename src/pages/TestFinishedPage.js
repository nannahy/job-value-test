import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { BasicContainer, Button } from "../components/style";

const TestFinished = () => {
  const history = useHistory();
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [userResult, setUserResult] = useState();

  const answerString = Object.values(state.answer)
    .map((value, i) => `B${i + 1}=${value}`)
    .join(" ");
  const timeStamp = new Date().getTime();

  const data = {
    apikey: "91ba033859063edfb432487e1853ddb1",
    qestrnSeq: "6",
    trgetSe: "100209",
    name: state.name,
    gender: state.gender === "male" ? "100323" : "100324",
    school: "",
    grade: "",
    email: "",
    startDtm: timeStamp,
    answers: answerString,
  };

  const testData = {
    apikey: "91ba033859063edfb432487e1853ddb1",
    qestrnSeq: "6",
    trgetSe: "100209",
    name: "Elice",
    gender: "100323",
    school: "",
    grade: "",
    email: "",
    startDtm: timeStamp,
    answers:
      "B1=1 B2=3 B3=5 B4=7 B5=9 B6=11 B7=13 B8=15 B9=17 B10=19 B11=21 B12=23 B13=25 B14=27 B15=29 B16=31 B17=33 B18=35 B19=37 B20=39 B21=41 B22=43 B23=45 B24=47 B25=49 B26=51 B27=53 B28=55",
  };

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

  const editResult = responseData => {
    const getDate = endDtm => {
      return endDtm.split("T")[0];
    };

    const getResult = wonScore => {
      const resultList = wonScore.trim().split(" ");

      const getList = item => {
        const items = item.split("=");
        return [items[0], items[1]];
      };

      const result = resultList.map(item => getList(item));
      return result;
    };

    const getScoreKey = result => {
      const sortedResult = result.sort((a, b) => b[1] - a[1]);
      const highScore = sortedResult.slice(0, 2).map(item => item[0]);
      const lowScore = sortedResult.slice(-2).map(item => item[0]);

      return { highScore, lowScore };
    };

    const name = responseData.user.name;
    const gender = responseData.user.grade === "100323" ? "남자" : "여자";
    const endDtm = responseData.result.endDtm;
    const date = getDate(endDtm);
    const wonScore = responseData.result.wonScore;
    const result = getResult(wonScore);
    const highScore = getScoreKey(result).highScore;
    const lowScore = getScoreKey(result).lowScore;

    return { name, gender, date, result, highScore, lowScore };
  };

  const getResult = async seqKey => {
    const response = await axios.get(
      `https://www.career.go.kr/inspct/api/psycho/report?seq=${seqKey}`,
    );
    const result = await editResult(response.data);
    return result;
  };

  const fetch = async () => {
    try {
      const response = await axios.post(
        "https://www.career.go.kr/inspct/openapi/test/report",
        testData,
      );
      const seqKey = response.data.RESULT.url.split("=")[1];
      const result = await getResult(seqKey);
      return { ...result };
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetch().then(setUserResult);
  }, []);

  // useEffect(() => {
  //   dispatch(getResult(userResult));
  // }, [userResult]);

  console.log("check", userResult);

  return (
    <BasicContainer>
      <h2>검사가 완료되었습니다.</h2>
      <p>
        검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게
        생각하는지를 알려주고,
        <br />
        중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
      </p>
      {userResult && (
        <p>
          직업생활과 관련하여 {userResult.name}님은&nbsp;
          {jobValue[userResult.highScore[0]]}(와)과&nbsp;
          {jobValue[userResult.highScore[1]]}(을)를 가장 중요하게 생각합니다.
          <br />
          반면에 {jobValue[userResult.lowScore[0]]},&nbsp;
          {jobValue[userResult.lowScore[1]]}(은)는 상대적으로 덜 중요하게
          생각합니다.
        </p>
      )}
      <Button onClick={() => history.push("/result")}>결과보기</Button>
    </BasicContainer>
  );
};

export default TestFinished;
