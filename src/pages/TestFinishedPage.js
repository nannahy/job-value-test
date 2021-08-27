import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Button from "../components/Buttons";
import TestFinishedContent from "../components/TestFinishedContent";
import { BasicContainer2 } from "../components/Containers";
import { setResult } from "../redux/action";
import getData from "../utils/parseAnswerData";
import { postResult } from "../utils/api";

const TestFinished = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const name = useSelector(state => state.name);
  const answer = useSelector(state => state.answer);
  const gender = useSelector(state => state.gender);
  const result = useSelector(state => state.result);

  useEffect(() => {
    postResult(
      getData(name, gender, answer),
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
