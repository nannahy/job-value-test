import { useState } from 'react';
import { useHistory } from 'react-router';
import styled, { css } from 'styled-components';

const StartContainer = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 30px;
    }
`;

const Button = styled.button`
    margin-top: 30px;
    font-size: 24px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background: lightgray;

    &:hover {
        ${({disabled}) => !disabled && css`
        background: gray;
        cursor: pointer;
        `}
    }

    ${({disabled}) => disabled && css`
        opacity: 0.5;
    `}
`;

const InfoContainer = styled.div`
    width: 200px;
    font-size: 14px;

    + div {
        margin-top: 20px;
    }

    > p {
        margin: 5px;;
        font-size: 16px;
        font-weight: bold;
    }

    > label {
        display: inline-block;
        font-size: 20px;
        width: 100px;
    }
`;

const Input = styled.input`
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    padding: 4px 8px;
    border-radius: 8px;
    border: 1px solid lightgray;
    font-size: 20px;
`;

const Start = () => {
    const [userName, setUserName] = useState('');
    const [userGender, setUserGender] = useState('');

    const history = useHistory();
    
    const handleSubmit = () => {
        const user = {userName, userGender};
        history.push('/test-example');
    };

    console.log(userName, userGender);

    return (
        <StartContainer>
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
                disabled={!userName || !userGender}
                onClick={handleSubmit}
            >검사하기</Button>
        </StartContainer>
    )
}

export default Start;