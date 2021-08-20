import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (
    <div>
      <h1>페이지를 찾을 수 없습니다</h1>
      <button type="submit" onClick={() => history.push("/start")}>
        시작 화면으로 가기
      </button>
    </div>
  );
};

export default NotFound;
