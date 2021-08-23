/* eslint-disable no-unused-expressions */
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BasicContainer, Button } from "../components/style";
import UserInfoBox from "../components/UserInfoBox";
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
