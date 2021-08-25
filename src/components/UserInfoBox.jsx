import styled from "styled-components";
import { colors, Line, clicked, Hover } from "../styles/style";
import { fontStyle4 } from "../styles/fontStyle";
import { infoLabel } from "../styles/labelStyle";
import buttonStyle from "../styles/buttonStyle";

const InfoWrapper = styled.div`
  margin-bottom: 30px;
`;

const InfoContainer = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  margin: 20px 0 25px 0;
`;

const Info = styled.p`
  ${fontStyle4};
  color: ${colors.gray600};
  margin-bottom: 5px;
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${colors.gray400};
  ${fontStyle4};
  color: ${colors.gray800};

  &:focus {
    outline: none;
    ${clicked}
  }

  &:hover {
    ${({ disabled }) => !disabled && Hover}
  }
`;

const InputBox = styled.div`
  display: flex;
`;

const InfoLabel = styled.label`
  ${infoLabel};
`;

const UserInfoBox = ({ userInfo, setUserInfo }) => {
  const handleChange = e => {
    const userData = { type: e.target.type, value: e.target.value };
    return setUserInfo(userData);
  };

  return (
    <InfoWrapper>
      <InfoContainer>
        <Info>이름</Info>
        <Name name={userInfo.name} handleChange={handleChange} />
      </InfoContainer>
      <Line />
      <InfoContainer>
        <Info>성별</Info>
        <InputBox>
          <Gender
            gender="male"
            handleChange={handleChange}
            userGender={userInfo.gender}
          />
          <Gender
            gender="female"
            handleChange={handleChange}
            userGender={userInfo.gender}
          />
        </InputBox>
      </InfoContainer>
    </InfoWrapper>
  );
};

const Name = ({ name, handleChange }) => {
  return <Input type="text" value={name} onChange={e => handleChange(e)} />;
};

const Gender = ({ gender, handleChange, userGender }) => {
  const genders = { male: "남자", female: "여자" };
  return (
    <InfoLabel htmlFor={gender} checked={userGender === gender ? true : false}>
      <input
        type="radio"
        id={gender}
        name="gender"
        value={gender}
        onClick={e => handleChange(e)}
      />
      {genders[gender]}
    </InfoLabel>
  );
};

export const InfoButton = styled.button`
  ${buttonStyle};
`;

export default UserInfoBox;
