import styled from "styled-components";

const OptionBox = styled.div`
  box-sizing: border-box;
  padding: 20px 40px;
  width: 100%;
  background: lightgray;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-top: 24px;
`;

const DescContainer = styled.div`
  grid-column: 1 / span 2;
`;

const QuestionBox = ({
  qNum,
  question,
  option1,
  option2,
  desc1,
  desc2,
  score1,
  score2,
  optionClick,
  answer,
}) => {
  return (
    <OptionBox>
      <p>
        {qNum}.{question}
      </p>
      <Option
        qNum={qNum}
        score={score1}
        option={option1}
        onClick={optionClick}
        answer={answer}
      />
      <Option
        qNum={qNum}
        score={score2}
        option={option2}
        onClick={optionClick}
        answer={answer}
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

const Option = ({ qNum, score, option, onClick, answer }) => {
  const handleClick = e => {
    const { name, value } = e.target;
    onClick(name, value);
  };

  const isChecked = (name, value) => {
    return answer[name] === value ? true : false;
  };

  return (
    <label htmlFor={score}>
      <input
        type="radio"
        id={score}
        name={qNum}
        value={score}
        onClick={e => handleClick(e)}
        defaultChecked={isChecked(qNum, score)}
      />
      {option}
    </label>
  );
};

const DescBox = ({ option1, option2, desc1, desc2 }) => {
  return (
    <DescContainer>
      <p>
        *{option1}: {desc1}
      </p>
      <p>
        *{option2}: {desc2}
      </p>
    </DescContainer>
  );
};

export default QuestionBox;
