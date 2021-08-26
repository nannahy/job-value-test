const initState = {
  name: "",
  gender: "",
  answer: {},
  result: {},
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "SET_GENDER":
      return {
        ...state,
        gender: action.gender,
      };
    case "ADD_ANSWER":
      return {
        ...state,
        answer: { ...state.answer, ...action.answer },
      };

    case "GET_RESULT":
      return {
        result: action.result,
      };
    default:
      return state;
  }
};

export default Reducer;
