const getAnswerString = answer => {
    const realAnswer = Object.values(answer).slice(1);
    const answerString = realAnswer
      .map((value, i) => `B${i + 1}=${value}`)
      .join(" ");
    return answerString;
  };
  
  const getTimeStamp = () => {
    return Date.now();
  };
  
  const getGender = gender => {
    const genderMap = { male: "100323", female: "100324" };
    return genderMap[gender];
  };
  
const getData = (name, _gender, answer) => {
    const gender = getGender(_gender);
    const answerString = getAnswerString(answer);
    const timeStamp = getTimeStamp();
    return (
        {
            apikey: "91ba033859063edfb432487e1853ddb1",
            qestrnSeq: "6",
            trgetSe: "100209",
            name: name,
            gender: gender,
            school: "",
            grade: "",
            email: "",
            startDtm: timeStamp,
            answers: answerString,
    }
    );
}

export default getData;