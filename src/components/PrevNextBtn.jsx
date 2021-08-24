import styled from "styled-components";
import { Footer, ButtonStyle1 } from "../styles/style";

const PrevNextBtnBox = styled.button`
  ${ButtonStyle1};
  margin: 0;
  width: 180px;
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
