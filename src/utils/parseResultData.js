const editResult = (responseData, jobValue) => {
    const getDate = endDtm => {
      return endDtm.split("T")[0];
    };
  
    const parseResult = wonScore => {
      const resultList = wonScore.trim().split(" ");
  
      const getList = item => {
        const items = item.split("=");
        return [items[0], items[1]];
      };
  
      const resultDraft = resultList.map(item => getList(item));
      const result = resultDraft
        .map(item => [item[0], jobValue[item[0]], item[1]])
        .sort((a, b) => b[2] - a[2]);
      return result;
    };
  
    const name = responseData.user.name;
    const gender = responseData.user.grade === "100323" ? "남자" : "여자";
    const endDtm = responseData.result.endDtm;
    const date = getDate(endDtm);
    const wonScore = responseData.result.wonScore;
    const result = parseResult(wonScore);
    const highScoreKey = result.slice(0, 2).map(item => item[0]);
    const lowScoreKey = result.slice(-2).map(item => item[0]);
    const highScoreValue = result.slice(0, 2).map(item => item[1]);
    const lowScoreValue = result.slice(-2).map(item => item[1]);
  
    return {
      name,
      gender,
      date,
      result,
      highScoreKey,
      highScoreValue,
      lowScoreKey,
      lowScoreValue,
    };
};
  
export default editResult;