import { useHistory } from "react-router";
import styled from "styled-components";

const TestContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    margin-top: 20px;
    align-items: end;
    row-gap: 8px;

    > * {
        margin: 0;
    }

    > h2 {
        font-size: 20px;
    }

    > p {
        font-size: 16px;
        font-weight: bold;
    }
    
    > div {
        grid-column: 1 / span 2;
        background: lightgray;
        width: 100%;
        height: 10px;
        border-radius:5px;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`;


const Footer = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;

    > button {
        width: 200px;
        height: 40px;
    }
`;

const QuestionBox = styled.div`
    box-sizing: border-box;
    padding: 20px 40px;
    width: 100%;
    background: lightgray;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        margin: 0 0 14px 0;
    }

    > div {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        font-weight: bold;
    }

    + div {
        margin-top: 4px;
    }
`

const QuestionList = ({qNum}) => {
    return (
        <QuestionBox>
            <p>{qNum}.직업과관련된 두 개의 가치 중에서 자신에게 더 중요한 가치에 표시하세요.</p>
            <div>
                <label><input type='radio' name={qNum} value='선택' />선택1</label>
                <label><input type='radio' name={qNum} value='선택' />선택2</label>
            </div>
        </QuestionBox>
    )
};

export const TestExample = () => {
    const history = useHistory();

    return (
        <TestContainer>
            <Header>
                <h2>검사예시</h2>
                <p>0%</p>
                <div />
            </Header>
            <Body>
                <p>직업과관련된 두 개의 가치 중에서 자신에게 더 중요한 가치에 표시하세요. 가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
                <QuestionList qNum='0' />
            </Body>
            <Footer>
                <button onClick={() => history.push('/start')}>이전</button>
                <button onClick={() => history.push('/test')}>다음</button>
            </Footer>
        </TestContainer>
    )
};

const Test = () => {
    const history = useHistory();

    return (
        <TestContainer>
            <Header>
                <h2>검사진행</h2>
                <p>0%</p>
                <div />
            </Header>
            <Body>
                {Array(5).fill('').map((_, i) => <QuestionList qNum={i} />)}
            </Body>
            <Footer>
                <button onClick={() => history.push('/test-example')}>이전</button>
                <button onClick={() => history.push('/test-finished')}>다음</button>
            </Footer>
        </TestContainer>
    )
};


export const TestFinished = () => {
    const history = useHistory();

    return (
        <div>
            <h3>검사가 완료되었습니다.</h3>
            <p>검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고, 중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</p>
            <button onClick={() => history.push('/result')}>결과보기</button>
        </div>
    )
}

export default Test;