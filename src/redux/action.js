export const setName = (name) => ({
    type: "SET_NAME",
    name,
});

export const setGender = (gender) => ({
    type: "SET_GENDER",
    gender,
});

export const addAnswer = (idx, answer) => ({
    type: "ADD_ANSWER",
    idx,
    answer,
});

export const checkProgress = () => ({
    type: "CHECK_PROGRESS",
    count: 1,
});