import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { 
    QuestionBox,
    TestContainer,
    Header,
    ProgressBar,
    Body,
    InputRadio,
    Footer,
} from "./components";
import { useSelector } from "react-redux";

export const TestExample = () => {
    const history = useHistory();

    const name = useSelector((state) => state.name)
    const gender = useSelector((state) => state.gender)
    console.log(name, gender);

    return (
        <TestContainer>
            <Header>
                <h2>검사예시</h2>
                <p>0%</p>
                <ProgressBar progressRate='50'/>
            </Header>
            <Body>
                <p>직업과관련된 두 개의 가치 중에서 자신에게 더 중요한 가치에 표시하세요. 가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
                <QuestionBox qNum='0' />
            </Body>
            <Footer>
                <button onClick={() => history.push('/start')}>이전</button>
                <button onClick={() => history.push('/test')}>다음</button>
            </Footer>
        </TestContainer>
    )
};

export const Test = () => {
    const history = useHistory();
    const [questionList, setQuestionList] = useState([]);

    const [userAnser, setUserAnswer] = useState();

    useEffect(() => {
        (async function() {
            const response = await axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=91ba033859063edfb432487e1853ddb1&q=6');
            setQuestionList(response.data.RESULT);
            console.log(response);
            console.log(questionList);
            
            // const response2 = await axios.post('https://www.career.go.kr/inspct/openapi/test/report?apikey=91ba033859063edfb432487e1853ddb1&q=6/', '')
            // console.log(response2.data)
        })();
    }, []);

    const buttonClick = (idx, value) => {
        const answer = `B${idx}=${value}`
        console.log('answer', answer)
        return answer
    }

    return (
        <TestContainer>
            <Header>
                <h2>검사진행</h2>
                <p>0%</p>
                <ProgressBar progressRate='33'/>
            </Header>
            <Body>
                <p>직업과관련된 두 개의 가치 중에서 자신에게 더 중요한 가치에 표시하세요. 가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
                {questionList.map((item) => <QuestionBox
                    key={item.qitemNo}
                    qNum={item.qitemNo}
                    option1={item.answer01}
                    option2={item.answer02}
                    desc1={item.answer03}
                    desc2={item.answer04}
                    score1={item.answerScore01}
                    score2={item.answerScore02}
                    buttonClick={buttonClick}
                />)}
            </Body>
            <Footer>
                <button onClick={() => history.push('/test-example')}>이전</button>
                <button onClick={() => history.push('/test-finished')}>다음</button>
            </Footer>
        </TestContainer>
    )
};