import axios from "axios";
import editResult from "./parseResultData";
import { eduIndex, majorIndex, editEduJobs, editMajorJobs } from "./parseJobsData";

// 질문 데이터
export const getQuestion = async () => {
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

// 결과1. 직업 가치 데이터
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
  
const getResult = async seqKey => {
    const response = await axios.get(
      `https://www.career.go.kr/inspct/api/psycho/report?seq=${seqKey}`,
    );
    const result = editResult(response.data, jobValue);
    return result;
  };
  
export const postResult = async data => {
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
  
// 결과2. 직업 정보 데이터
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

export const getJobsResult = async result => {
  try {
    const jobsEdu = await getJobsByEdu(result.highScoreKey);
    const jobsMajor = await getJobsByMajor(result.highScoreKey);
    return [jobsEdu, jobsMajor];
  } catch (e) {
    console.log(e);
  }
};