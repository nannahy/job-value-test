import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BasicContainer2 } from "../components/Containers";
import UserInfoBox from "../components/UserInfoBox";
import Button from "../components/Buttons";
import { setGender, setName } from "../redux/Toolkit";
import { TitleH1 } from "../components/Fonts";

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
    <BasicContainer2>
      <TitleH1>직업가치관검사</TitleH1>
      <UserInfoBox userInfo={userInfo} setUserInfo={setUserInfo} />
      <Button
        type="button"
        disabled={!userName || !userGender}
        onClick={handleSubmit}
      >
        검사하기
      </Button>
    </BasicContainer2>
  );
};

export default Start;
