import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TestContainer, Button } from "../components/style";
import axios from "axios";
import UserInfoTable from "../components/UserInfoTable";
import JobsTable from "../components/JobsTable";
import { useSelector } from "react-redux";

const Result = () => {
  const state = useSelector(state => state);

  console.log(state);
  const history = useHistory();
  const [jobEdu, setJobEdu] = useState();
  const [jobMajor, setJobMajor] = useState();
  const [userResult, setUserResult] = useState({
    date: "2021-08-23",
    gender: "남자",
    highScore: ["2", "3"],
    lowScore: ["5", "6"],
    name: "Elice",
    result: [
      ["7", "6"],
      ["8", "5"],
      ["1", "4"],
      ["4", "4"],
      ["2", "3"],
      ["3", "3"],
      ["5", "2"],
      ["6", "1"],
    ],
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

  const getJobsByEdu = async highScoreKey => {
    const response = await axios.get(
      `https://inspct.career.go.kr/inspct/api/psycho/value/jobs?no1=${highScoreKey[0]}&no2=${highScoreKey[1]}`,
    );
    return response.data;
  };

  const getJobsByMajor = async highScoreKey => {
    const response = await axios.get(
      `https://inspct.career.go.kr/inspct/api/psycho/value/majors?no1=${highScoreKey[0]}&no2=${highScoreKey[1]}`,
    );
    return response.data;
  };

  const fetch = async () => {
    try {
      const jobsEdu = await getJobsByEdu(userResult.highScore);
      const jobsMajor = await getJobsByMajor(userResult.highScore);
      return { ...userResult, jobsEdu, jobsMajor };
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetch().then(result => {
      setUserResult(result);
      const { edu, major } = editJobs(result.jobsEdu, result.jobsMajor);
      setJobEdu(edu);
      setJobMajor(major);
    });
  }, []);

  console.log(userResult, jobEdu, jobMajor);
  const editJobs = (jobsEdu, jobsMajor) => {
    const editEduJobs = jobsEdu => {
      const eduIndex = { 2: "고졸", 3: "전문대졸", 4: "대졸", 5: "대학원졸" };
      const jobEdu = {};
      const addObj = (Obj, item) => {
        const idx = eduIndex[item[2]];
        const value = item[1];
        Obj[idx] ? (Obj[idx] = [...Obj[idx], value]) : (Obj[idx] = [value]);
      };
      jobsEdu.forEach(item => addObj(jobEdu, item));
      return jobEdu;
    };

    const editMajorJobs = jobsMajor => {
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
      const jobMajor = {};
      const addObj = (Obj, item) => {
        const zero = majorIndex[0];
        const idx = majorIndex[item[2]];
        const value = item[1];
        Obj[idx] ? (Obj[idx] = [...Obj[idx], value]) : (Obj[idx] = [value]);
        idx !== "계열무관" && (Obj["계열무관"] = [...Obj["계열무관"], value]);
      };
      jobsMajor.forEach(item => addObj(jobMajor, item));
      return jobMajor;
    };

    const edu = editEduJobs(jobsEdu);
    const major = editMajorJobs(jobsMajor);

    return { edu, major };
  };

  return (
    <TestContainer>
      <h1>직업가치관검사 결과표</h1>
      {jobEdu && jobMajor && (
        <>
          <UserInfoTable data={userResult} />
          <JobsTable data={jobEdu} />
          <JobsTable data={jobMajor} />
        </>
      )}
      <Button onClick={() => history.push("/start")}>다시 검사하기</Button>
    </TestContainer>
  );
};

export default Result;
