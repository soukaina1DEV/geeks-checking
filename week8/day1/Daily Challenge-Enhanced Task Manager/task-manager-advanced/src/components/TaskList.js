import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { state } = useContext(TaskContext);

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "ALL") return true;
    if (state.filter === "COMPLETED") return task.completed;
    if (state.filter === "ACTIVE") return !task.completed;
    return true;
  });

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {filteredTasks.length === 0 ? (
        <p>No tasks to display 👀</p>
      ) : (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </ul>
  );
};

export default TaskList;
