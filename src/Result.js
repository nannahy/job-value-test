import { useHistory } from "react-router";
import { TestContainer, Button } from "./components";

const Result = () => {
    const history = useHistory();

    return (
        <TestContainer>
            <h1>직업가치관검사 결과표</h1>
            <Button onClick={() => history.push('/start')}>다시 검사하기</Button>
        </TestContainer>
    )
}

export default Result;