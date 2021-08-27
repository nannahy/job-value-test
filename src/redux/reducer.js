import { createReducer } from "@reduxjs/toolkit";
import { setName, setGender, addAnswer, setResult, resetInputs } from "./action";

const initState = {
  name: "",
  gender: "",
  answer: {},
  result: null,
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
  builder.addCase(setResult, (state, action) => {
    state.result = action.payload;
  });
  builder.addCase(resetInputs, (state, action) => {
    return initState;
  });
});

export default Reducer;
