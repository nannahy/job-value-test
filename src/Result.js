import { useHistory } from "react-router";

const Result = () => {
    const history = useHistory();

    return (
        <div>
            <h1>직업가치관검사 결과표</h1>
            <button onClick={() => history.push('/start')}>다시 검사하기</button>
        </div>
    )
}

export default Result;