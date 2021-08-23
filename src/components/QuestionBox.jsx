import styled, { css } from "styled-components";
import { fontStyle4, fontStyle5, fontStyle6 } from "../styles/fontStyle";
import { colors, clicked, btnHover } from "../styles/style";
import { Label, InputButton } from "../styles/LabelInput";

const OptionContainer = styled.div`
  box-sizing: border-box;
  padding: 60px 40px;
  width: 100%;
  border-bottom: 0.5px solid ${colors.gray400};
  display: flex;
  flex-direction: column;
`;

const Request = styled.p`
  ${fontStyle5};
  color: ${colors.gray600};
`;

const OptionBox = styled.div`
  display: flex;
`;

const OptionLabel = styled.label`
  ${Label}
  height: 60px;
  margin: 20px 0;
  line-height: 60px;
  ${({ defaultChecked }) => defaultChecked && clicked}

  + label {
    margin-left: 10px;
  }

  &:hover {
    ${btnHover}
  }
`;

const OptionInput = styled.input`
  ${InputButton}
`;

const DescContainer = styled.div`
  grid-column: 1 / span 2;
`;

const DescWrapper = styled.div`
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
      <Request>
        {qNum}. {question}
      </Request>
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
    return answer[name] === value ? true : false;
  };

  return (
    <OptionLabel htmlFor={score} defaultChecked={isChecked(qNum, score)}>
      <OptionInput
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
      <DescWrapper>
        <Desc>
          *{option1} : {desc1}
        </Desc>
        <Desc>
          *{option2} : {desc2}
        </Desc>
      </DescWrapper>
    </DescContainer>
  );
};

export default QuestionBox;
