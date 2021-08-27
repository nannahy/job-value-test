import { useHistory } from "react-router-dom";
import { TitleH1 } from "../components/Fonts";
import { BasicContainer2 } from "../components/Containers";
import Button from "../components/Buttons";

const NotFound = () => {
  const history = useHistory();

  return (
    <BasicContainer2>
      <TitleH1>페이지를 찾을 수 없습니다</TitleH1>
      <Button type="submit" onClick={() => history.push("/start")}>
        시작 화면으로 가기
      </Button>
    </BasicContainer2>
  );
};

export default NotFound;
