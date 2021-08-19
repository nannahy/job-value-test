/* eslint-disable no-unused-expressions */
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BasicContainer, InfoContainer, Input, Button } from "./components";
import { setGender, setName } from "./redux/action";

const Start = () => {
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("");
  const userInfo = { userName, userGender };

  const history = useHistory();
  const dispatch = useDispatch();

  const setUserInfo = userData => {
    userData.type === "text"
      ? setUserName(userData.value)
      : setUserGender(userData.value);
  };

  const setNameGender = userInfo => {
    dispatch(setName(userInfo.name));
    dispatch(setGender(userInfo.gender));
  };

  const handleSubmit = () => {
    setNameGender(userInfo);
    history.push("/test-example");
  };

  return (
    <BasicContainer>
      <h1>직업가치관 검사</h1>
      <UserInfoBox userInfo={userInfo} setUserInfo={setUserInfo} />
      <Button
        type="button"
        disabled={!userName || !userGender}
        onClick={handleSubmit}
      >
        검사하기
      </Button>
    </BasicContainer>
  );
};

export default Start;

const UserInfoBox = ({ userInfo, setUserInfo }) => {
  const handleChange = e => {
    const userData = { type: e.target.type, value: e.target.value };
    return setUserInfo(userData);
  };

  return (
    <div>
      <InfoContainer>
        <p>이름</p>
        <Name name={userInfo.name} handleChange={handleChange} />
      </InfoContainer>
      <InfoContainer>
        <p>성별</p>
        <Gender gender="male" handleChange={handleChange} />
        <Gender gender="female" handleChange={handleChange} />
      </InfoContainer>
    </div>
  );
};

const Name = ({ name, handleChange }) => {
  return <Input type="text" value={name} onChange={e => handleChange(e)} />;
};

const Gender = ({ gender, handleChange }) => {
  const genders = { male: "남자", female: "여자" };
  return (
    <div>
      <input
        type="radio"
        name="gender"
        value={gender}
        onClick={e => handleChange(e)}
      />
      {genders[gender]}
    </div>
  );
};
