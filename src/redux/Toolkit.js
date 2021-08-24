import { createReducer, configureStore, createAction } from "@reduxjs/toolkit";

export const setName = createAction("SET_NAME");
export const setGender = createAction("SET_GENDER");
export const addAnswer = createAction("ADD_ANSWER");
export const getResult = createAction("GET_RESULT");
export const resetInputs = createAction("RESET_INPUTS");

const initState = {
  name: "",
  gender: "",
  answer: {},
  result: {},
};

const Reducer = createReducer(initState, builder => {
  builder.addCase(setName, (state, action) => {
    state.name = action.payload;
  });
  builder.addCase(setGender, (state, action) => {
    state.gender = action.payload;
  });
  builder.addCase(addAnswer, (state, action) => {
    state.answer = { ...state.answer, ...action.payload };
  });
  builder.addCase(getResult, (state, action) => {
    state.result = action.payload;
  });
  builder.addCase(resetInputs, (state, action) => {
    return initState;
  });
});

const store = configureStore({
  reducer: Reducer,
});

export default store;
