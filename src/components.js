import { OptionBox, InfoContainer, Input } from "./styledComponents";

// start
export const UserInfoBox = ({ userInfo, setUserInfo }) => {
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

// test
const Option = ({ qNum, score, option, click, checked }) => {
  const handleClick = e => {
    const idx = e.target.name;
    const { value } = e.target;
    return click(idx, value);
  };

  // eslint-disable-next-line consistent-return
  const handleCheck = score => {
    if (checked.bool === false) return false;
    if (score === checked.answerScore) return true;
  };

  return (
    <label htmlFor={score}>
      <input
        type="radio"
        id={score}
        name={qNum}
        value={score}
        onClick={e => handleClick(e)}
        defaultChecked={handleCheck(score)}
      />
      {option}
    </label>
  );
};

const DescBox = ({ option1, option2, desc1, desc2 }) => {
  return (
    <div>
      <p>
        *{option1}: {desc1}
      </p>
      <p>
        *{option2}: {desc2}
      </p>
    </div>
  );
};

export const QuestionBox = ({
  qNum,
  option1,
  option2,
  desc1,
  desc2,
  score1,
  score2,
  optionClick,
  checked,
  div,
}) => {
  return (
    <OptionBox>
      <Option
        qNum={qNum}
        score={score1}
        option={option1}
        click={optionClick}
        checked={checked}
      />
      <Option
        qNum={qNum}
        score={score2}
        option={option2}
        click={optionClick}
        checked={checked}
      />
      <DescBox
        option1={option1}
        option2={option2}
        desc1={desc1}
        desc2={desc2}
      />
    </OptionBox>
  );
};
