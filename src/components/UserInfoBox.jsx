import styled from "styled-components";

const InfoContainer = styled.div`
  width: 200px;
  font-size: 14px;
  display: flex;
  flex-direction: column;

  + & {
    margin-top: 20px;
  }
`;

const Info = styled.p``;

const Input = styled.input`
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid lightgray;
  font-size: 20px;
`;

const GenderBox = styled.div`
  display: flex;
`;

const Label = styled.label`
  width: 50%;
`;

const UserInfoBox = ({ userInfo, setUserInfo }) => {
  const handleChange = e => {
    const userData = { type: e.target.type, value: e.target.value };
    return setUserInfo(userData);
  };

  return (
    <div>
      <InfoContainer>
        <Info>이름</Info>
        <Name name={userInfo.name} handleChange={handleChange} />
      </InfoContainer>
      <InfoContainer>
        <Info>성별</Info>
        <GenderBox>
          <Gender gender="male" handleChange={handleChange} />
          <Gender gender="female" handleChange={handleChange} />
        </GenderBox>
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
    <Label htmlFor="gender">
      <input
        type="radio"
        id="gender"
        name="gender"
        value={gender}
        onClick={e => handleChange(e)}
      />
      {genders[gender]}
    </Label>
  );
};

export default UserInfoBox;
