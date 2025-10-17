import { SET_SELECTED_DATE, ADD_TASK, EDIT_TASK, DELETE_TASK } from "./actions";

const initialState = {
  selectedDate: new Date().toISOString().split("T")[0],
  tasksByDate: {}, // { "2025-10-17": [ {id, text}, ... ] }
};

export const plannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DATE:
      return { ...state, selectedDate: action.payload };

    case ADD_TASK: {
      const { date, text } = action.payload;
      const tasks = state.tasksByDate[date] || [];
      const newTask = { id: Date.now(), text };
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [date]: [...tasks, newTask],
        },
      };
    }

    case EDIT_TASK: {
      const { date, id, newText } = action.payload;
      const updatedTasks = (state.tasksByDate[date] || []).map((task) =>
        task.id === id ? { ...task, text: newText } : task
      );
      return {
        ...state,
        tasksByDate: { ...state.tasksByDate, [date]: updatedTasks },
      };
    }

    case DELETE_TASK: {
      const { date, id } = action.payload;
      const filteredTasks = (state.tasksByDate[date] || []).filter(
        (task) => task.id !== id
      );
      return {
        ...state,
        tasksByDate: { ...state.tasksByDate, [date]: filteredTasks },
      };
    }

    default:
      return state;
  }
};
