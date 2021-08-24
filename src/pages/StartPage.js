import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BasicContainer } from "../styles/style";
import UserInfoBox, { MainTitle } from "../components/UserInfoBox";
import Button from "../components/Button";
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
