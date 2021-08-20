import styled from "styled-components";
import { Footer } from "./style";

const PrevNextBtnBox = styled.button`
  width: 200px;
  height: 40px;
`;

const PrevNextBtn = ({ handleClick, checkActive }) => {
  return (
    <Footer>
      <PrevNextBtnBox type="button" name="prev" onClick={e => handleClick(e)}>
        이전
      </PrevNextBtnBox>
      <PrevNextBtnBox
        type="button"
        name="next"
        disabled={checkActive()}
        onClick={e => handleClick(e)}
      >
        다음
      </PrevNextBtnBox>
    </Footer>
  );
};

export default PrevNextBtn;
