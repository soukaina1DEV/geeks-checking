import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasksByDate, selectedDate } = useSelector((state) => state.planner);
  const tasks = tasksByDate[selectedDate] || [];

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.length === 0 ? (
        <p>No tasks for this day</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </ul>
  );
};

export default TaskList;
