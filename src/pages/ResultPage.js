import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { resetInputs } from "../redux/Toolkit";
import ResultTable from "../components/ResultTable";
import Button from "../components/Buttons";
import { TitleH1 } from "../components/Fonts";
import { BasicContainer1 } from "../components/Containers";

const eduIndex = {
  1: "중졸",
  2: "고졸",
  3: "전문대졸",
  4: "대졸",
  5: "대학원졸",
};
const majorIndex = {
  0: "계열무관",
  1: "인문",
  2: "사회",
  3: "교육",
  4: "공학",
  5: "자연",
  6: "의학",
  7: "예체능",
};

const editEduJobs = (jobsEdu, eduIndex) => {
  const Obj = {};
  const addObj = (Obj, item) => {
    const key = eduIndex[item[2]];
    const value = item[1];
    Obj[key] ? (Obj[key] = [...Obj[key], value]) : (Obj[key] = [value]);
    return Obj;
  };
  jobsEdu.forEach(item => addObj(Obj, item));
  return Obj;
};

const editMajorJobs = (jobsMajor, majorIndex) => {
  const Obj = {};
  const addObj = (Obj, item) => {
    const key = majorIndex[item[2]];
    const value = item[1];
    Obj[key] ? (Obj[key] = [...Obj[key], value]) : (Obj[key] = [value]);
    key !== "계열무관" && (Obj["계열무관"] = [...Obj["계열무관"], value]);
    return Obj;
  };
  jobsMajor.forEach(item => addObj(Obj, item));
  return Obj;
};

const getJobsByEdu = async highScoreKey => {
  const response = await axios.get(
    `https://inspct.career.go.kr/inspct/api/psycho/value/jobs?no1=${highScoreKey[0]}&no2=${highScoreKey[1]}`,
  );
  return editEduJobs(response.data, eduIndex);
};

const getJobsByMajor = async highScoreKey => {
  const response = await axios.get(
    `https://inspct.career.go.kr/inspct/api/psycho/value/majors?no1=${highScoreKey[0]}&no2=${highScoreKey[1]}`,
  );
  return editMajorJobs(response.data, majorIndex);
};

const fetch = async result => {
  try {
    const jobsEdu = await getJobsByEdu(result.highScoreKey);
    const jobsMajor = await getJobsByMajor(result.highScoreKey);
    return [jobsEdu, jobsMajor];
  } catch (e) {
    console.log(e);
  }
};

const Result = () => {
  const result = useSelector(state => state.result);
  const dispatch = useDispatch();
  const history = useHistory();

  const [jobEdu, setJobEdu] = useState();
  const [jobMajor, setJobMajor] = useState();

  useEffect(() => {
    fetch(result).then(result => {
      setJobEdu(result[0]);
      setJobMajor(result[1]);
    });
  }, []);

  const handleClick = () => {
    dispatch(resetInputs());
    history.push("/start");
  };

  return (
    <BasicContainer1>
      <TitleH1>직업가치관검사 결과표</TitleH1>
      {jobEdu && jobMajor && (
        <ResultTable result={result} jobEdu={jobEdu} jobMajor={jobMajor} />
      )}
      <Button onClick={() => handleClick()}>다시 검사하기</Button>
    </BasicContainer1>
  );
};

export default Result;
