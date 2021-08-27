import { createAction } from "@reduxjs/toolkit";

export const setName = createAction("SET_NAME");
export const setGender = createAction("SET_GENDER");
export const addAnswer = createAction("ADD_ANSWER");
export const setResult = createAction("SET_RESULT");
export const resetInputs = createAction("RESET_INPUTS");
