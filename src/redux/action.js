export const setName = name => ({
  type: "SET_NAME",
  name,
});

export const setGender = gender => ({
  type: "SET_GENDER",
  gender,
});

export const addAnswer = answer => ({
  type: "ADD_ANSWER",
  answer,
});

export const getResult = result => ({
  type: "GET_RESULT",
  result,
});
