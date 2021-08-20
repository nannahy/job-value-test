import { InfoContainer, Input } from "./style";

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

export default UserInfoBox;
