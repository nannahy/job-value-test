import styled from "styled-components";
import { fontStyle6 } from "../styles/fontStyle";
import { colors } from "../styles/style";
import { testLabel } from "../styles/labelStyle";
import { BodyP2 } from "./Fonts";

const OptionContainer = styled.div`
  box-sizing: border-box;
  padding: 0 20px 50px 20px;
  width: 100%;
  border-bottom: 0.5px solid ${colors.gray400};
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const OptionBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
`;

const OptionLabel = styled.label`
  ${testLabel}
`;

const DescContainer = styled.div`
  display: flex;
`;

const Desc = styled.p`
  ${fontStyle6};
  color: ${colors.gray600};
  width: 50%;
  padding-left: 10px;
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
    <OptionContainer>
      <BodyP2>
        Q{qNum}. {question}
      </BodyP2>
      <OptionBox>
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
      </OptionBox>
      <DescBox
        option1={option1}
        option2={option2}
        desc1={desc1}
        desc2={desc2}
      />
    </OptionContainer>
  );
};

const Option = ({ qNum, score, option, onClick, answer }) => {
  const handleClick = e => {
    const { name, value } = e.target;
    onClick(name, value);
  };

  const isChecked = (name, value) => {
    return !answer ? false : answer[name] === value ? true : false;
  };

  return (
    <OptionLabel htmlFor={score} defaultChecked={isChecked(qNum, score)}>
      <input
        type="radio"
        id={score}
        name={qNum}
        value={score}
        onClick={e => handleClick(e)}
        defaultChecked={isChecked(qNum, score)}
      />
      {option}
    </OptionLabel>
  );
};

const DescBox = ({ option1, option2, desc1, desc2 }) => {
  return (
    <DescContainer>
      <Desc>
        *{option1} : {desc1}
      </Desc>
      <Desc>
        *{option2} : {desc2}
      </Desc>
    </DescContainer>
  );
};

export default QuestionBox;
