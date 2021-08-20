import QuestionBox from "./QuestionBox";

const PageContent = ({ page, optionClick, checked }) => {
  if (page) {
    const contentList = page.map(item => (
      <QuestionBox
        key={item.qNum}
        qNum={item.qNum}
        option1={item.option1}
        option2={item.option2}
        desc1={item.desc1}
        desc2={item.desc2}
        score1={item.score1}
        score2={item.score2}
        optionClick={optionClick}
        checked={checked(item.qNum)}
        question={item.question}
      />
    ));
    return contentList;
  }
  return <div />;
};

export default PageContent;
