export const eduIndex = {
    1: "중졸",
    2: "고졸",
    3: "전문대졸",
    4: "대졸",
    5: "대학원졸",
  };
  export const majorIndex = {
    0: "계열무관",
    1: "인문",
    2: "사회",
    3: "교육",
    4: "공학",
    5: "자연",
    6: "의학",
    7: "예체능",
  };
  
  export const editEduJobs = (jobsEdu, eduIndex) => {
    const Obj = {};
    const addObj = (Obj, item) => {
      const key = eduIndex[item[2]];
      const value = item[1];
      Obj[key] ? (Obj[key] = [...Obj[key], value]) : (Obj[key] = [value]);
      return Obj;
    };
    jobsEdu.forEach(item => addObj(Obj, item));
    return Obj;
  };
  
  export const editMajorJobs = (jobsMajor, majorIndex) => {
    const Obj = {};
    const addObj = (Obj, item) => {
      const key = majorIndex[item[2]];
      const value = item[1];
      Obj[key] ? (Obj[key] = [...Obj[key], value]) : (Obj[key] = [value]);
      key !== "계열무관" && (Obj["계열무관"] = [...Obj["계열무관"], value]);
      return Obj;
    };
    jobsMajor.forEach(item => addObj(Obj, item));
    return Obj;
  };