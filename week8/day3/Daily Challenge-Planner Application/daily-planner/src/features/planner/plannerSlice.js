import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksByDate: {}, // Example: { '2025-10-16': [ {id, text}, ... ] }
  selectedDate: new Date().toISOString().split("T")[0],
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    addTask: (state, action) => {
      const { date, text } = action.payload;
      if (!state.tasksByDate[date]) state.tasksByDate[date] = [];
      state.tasksByDate[date].push({ id: Date.now(), text });
    },
    editTask: (state, action) => {
      const { date, id, newText } = action.payload;
      const tasks = state.tasksByDate[date];
      if (tasks) {
        const task = tasks.find((t) => t.id === id);
        if (task) task.text = newText;
      }
    },
    deleteTask: (state, action) => {
      const { date, id } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date].filter(
        (t) => t.id !== id
      );
    },
  },
});

export const { setSelectedDate, addTask, editTask, deleteTask } =
  plannerSlice.actions;
export default plannerSlice.reducer;
