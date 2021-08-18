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

const TestExample = () => {
    const history = useHistory();
    const [lock, setLock] = useState(true);
    
    const optionClick = (e) => {
        setLock(false);
    }

    return (
        <TestContainer>
            <Header>
                <h2>검사예시</h2>
                <p>{lock? "0%" : "100%"}</p>
                <ProgressBar progressRate={lock? 0 : 100}/>
            </Header>
            <Body>
                <p>직업과관련된 두 개의 가치 중에서 자신에게 더 중요한 가치에 표시하세요. 가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
                <QuestionBox
                    key='0'
                    qNum='0'
                    option1='능력발휘'
                    option2='자율성'
                    desc1='직업을 통해 자신의 능력을 발휘하는 것입니다.'
                    desc2='일하는 시간과 방식에 대해서 스스로 결정할 수 있는 것입니다.'
                    optionClick={(e) => optionClick(e)}
                    checked={{bool: false, answerScore: null}}
                />
            </Body>
            <Footer>
                <button 
                    onClick={() => history.push('/test')}
                    disabled={lock}
                >검사하기</button>
            </Footer>
        </TestContainer>
    )
};

export default TestExample;