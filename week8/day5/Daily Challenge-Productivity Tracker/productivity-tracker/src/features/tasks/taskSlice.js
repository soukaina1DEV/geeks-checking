import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    { id: 1, name: "Work" },
    { id: 2, name: "Study" },
    { id: 3, name: "Health" },
  ],
  tasks: [
    { id: 1, title: "Finish project report", categoryId: 1, completed: false },
    { id: 2, title: "Read Redux docs", categoryId: 2, completed: false },
    { id: 3, title: "Go jogging", categoryId: 3, completed: true },
  ],
  selectedCategoryId: 1,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload.title,
        categoryId: action.payload.categoryId,
        completed: false,
      });
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.title = title;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    addCategory: (state, action) => {
      state.categories.push({ id: Date.now(), name: action.payload });
    },
    deleteCategory: (state, action) => {
      const id = action.payload;
      state.categories = state.categories.filter((c) => c.id !== id);
      state.tasks = state.tasks.filter((t) => t.categoryId !== id);
    },
    selectCategory: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  toggleTaskCompletion,
  addCategory,
  deleteCategory,
  selectCategory,
} = taskSlice.actions;

export default taskSlice.reducer;

// --- Selectors ---
export const selectTasks = (state) => state.tasks.tasks;
export const selectCategories = (state) => state.tasks.categories;
export const selectSelectedCategoryId = (state) =>
  state.tasks.selectedCategoryId;

// Returns tasks by category
export const selectTasksByCategory = createSelector(
  [selectTasks, selectSelectedCategoryId],
  (tasks, categoryId) => tasks.filter((t) => t.categoryId === categoryId)
);

// Returns completed task count
export const selectCompletedTasks = createSelector(
  [selectTasks],
  (tasks) => tasks.filter((t) => t.completed).length
);

// Returns a specific category by ID
export const selectCategoryById = (id) =>
  createSelector([selectCategories], (categories) =>
    categories.find((c) => c.id === id)
  );
