// Action Types
export const SET_SELECTED_DATE = "SET_SELECTED_DATE";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

// Action Creators
export const setSelectedDate = (date) => ({
  type: SET_SELECTED_DATE,
  payload: date,
});

export const addTask = (date, text) => ({
  type: ADD_TASK,
  payload: { date, text },
});

export const editTask = (date, id, newText) => ({
  type: EDIT_TASK,
  payload: { date, id, newText },
});

export const deleteTask = (date, id) => ({
  type: DELETE_TASK,
  payload: { date, id },
});
