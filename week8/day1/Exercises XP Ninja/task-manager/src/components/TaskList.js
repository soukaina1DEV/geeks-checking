import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { state } = useContext(TaskContext);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {state.tasks.length === 0 ? (
        <p>No tasks yet. Add one above 👆</p>
      ) : (
        state.tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </ul>
  );
};

export default TaskList;
