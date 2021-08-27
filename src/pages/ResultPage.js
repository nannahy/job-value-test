import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { resetInputs } from "../redux/action";
import {
  UserInfoTable,
  JobsTable,
  TableTitle,
  ResultText,
  GraphText,
  JobsText,
} from "../components/ResultTable";
import Button from "../components/Buttons";
import { Title4, Title3 } from "../components/Fonts";
import {
  BasicContainer1,
  BasicHeader,
  BasicFooter,
  Body,
} from "../components/Containers";
import ValueChart2 from "../components/ValueChart2";
import { getJobsResult } from "../utils/api";

const Result = () => {
  const result = useSelector(state => state.result);
  const dispatch = useDispatch();
  const history = useHistory();

  const [jobEdu, setJobEdu] = useState();
  const [jobMajor, setJobMajor] = useState();

  useEffect(() => {
    getJobsResult(result).then(data => {
      if (data)
      {setJobEdu(data[0]);
      setJobMajor(data[1]);}
    });
  }, []);

  const handleClick = () => {
    dispatch(resetInputs());
    history.push("/start");
  };

  return (
    <BasicContainer1>
      <BasicHeader>
        <Title4>직업가치관검사 결과표</Title4>
      </BasicHeader>
      {jobEdu && jobMajor && (
        <Body>
          <ResultText />
          <UserInfoTable data={result} />
          <Title3>직업가치관 결과</Title3>
          <GraphText name={result.name} highScoreValue={result.highScoreValue} lowScoreValue={result.lowScoreValue} />
          <ValueChart2 valueData={result.result} />
          <Title3>가치관과 관련이 높은 직업</Title3>
          <JobsText name={result.name} highScoreValue={result.highScoreValue} />
          <TableTitle>종사자 평균 학력별</TableTitle>
          <JobsTable data={jobEdu} />
          <TableTitle>종사자 평균 전공별</TableTitle>
          <JobsTable data={jobMajor} />
        </Body>
      )}
      <BasicFooter>
        <Button onClick={() => handleClick()}>다시 검사하기</Button>
      </BasicFooter>
    </BasicContainer1>
  );
};

export default Result;
