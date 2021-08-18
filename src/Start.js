import { useState } from 'react';
import { useHistory } from 'react-router';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import { 
    BasicContainer,
    InfoContainer,
    Input,
    Button,
} from './components';
import { setGender, setName } from './redux/action';

const Start = () => {
    const [userName, setUserName] = useState('');
    const [userGender, setUserGender] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();
    const name = useSelector((state) => state.name)
    const gender = useSelector((state) => state.gender)
    
    const handleSubmit = () => {
        dispatch(setName(userName));
        dispatch(setGender(userGender));
        console.log(name, gender);
        history.push('/test-example');
    };

    return (
            <BasicContainer>
                <h1>직업가치관 검사</h1>
                <InfoContainer><p>이름</p><Input
                    type='text'
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                /></InfoContainer>
                <InfoContainer>
                    <p>성별</p>
                    <label><input
                        type='radio'
                        name='gender'
                        value='male'
                        onClick={e => setUserGender(e.target.value)}
                    />남자</label>
                    <label><input
                        type='radio'
                        name='gender'
                        value='female'
                        onClick={e => setUserGender(e.target.value)}
                    />여자</label>
                </InfoContainer>
                <Button
                    // disabled={!userName || !userGender}
                    onClick={handleSubmit}
                >검사하기</Button>
            </BasicContainer>
    )
}

export default Start;