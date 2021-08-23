/* eslint-disable no-unused-expressions */
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BasicContainer, Button } from "../styles/style";
import UserInfoBox, { MainTitle, InfoButton } from "../components/UserInfoBox";
import { setGender, setName } from "../redux/Toolkit";

const Start = () => {
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("");
  const userInfo = { name: userName, gender: userGender };

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
      <MainTitle>직업가치관검사</MainTitle>
      <UserInfoBox userInfo={userInfo} setUserInfo={setUserInfo} />
      <InfoButton
        type="button"
        disabled={!userName || !userGender}
        onClick={handleSubmit}
      >
        검사하기
      </InfoButton>
    </BasicContainer>
  );
};

export default Start;
