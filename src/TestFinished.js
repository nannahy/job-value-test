import { useHistory } from "react-router";
import { BasicContainer, Button } from "./components";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const TestFinished = () => {
    const history = useHistory();
    const name = useSelector(state => state.name);
    const gender = useSelector(state => state.gender);
    const answer = useSelector(state => state.answer);

    const answerString = Object.values(answer).join(' ');
    const timeStamp = new Date().getTime();

    const data = {
        "apikey": '91ba033859063edfb432487e1853ddb1',
        "qestrnSeq": '6',
        "trgetSe": "100209",
        "name": name,
        "gender": gender === 'male'? 100323 : 100324,
        "school": '',
        "grade": '',
        "email": '',
        "startDtm": timeStamp,
        "answers": answerString,
    }

    const testData = {
        "apikey": '91ba033859063edfb432487e1853ddb1',
        "qestrnSeq": '6',
        "trgetSe": "100209",
        "name": name,
        "gender": gender === 'male'? 100323 : 100324,
        "school": '',
        "grade": '',
        "email": '',
        "startDtm": timeStamp,
        "answers": 'B1=1 B2=3 B3=5 B4=7 B5=9 B6=11 B7=13 B8=15 B9=17 B10=19 B11=21 B12=23 B13=25 B14=27 B15=29 B16=31 B17=33 B18=35 B19=37 B20=39 B21=41 B22=43 B23=45 B24=47 B25=49 B26=51 B27=53 B28=55',
    }

    console.log(name, gender, answer);

    useEffect(() => {
        (async function() {
            const response = await axios.post('https://www.career.go.kr/inspct/openapi/test/report', testData);
            console.log(response.data);
        })();
    }, []);

    return (
        <BasicContainer>
            <h2>검사가 완료되었습니다.</h2>
            <p>검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고,<br/>중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</p>
            <Button onClick={() => history.push('/result')}>결과보기</Button>
        </BasicContainer>
    )
}

export default TestFinished;