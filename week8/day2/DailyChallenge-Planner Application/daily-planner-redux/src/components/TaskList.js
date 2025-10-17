import React from "react";
import { connect } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
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

const mapStateToProps = (state) => {
  const tasks = state.tasksByDate[state.selectedDate] || [];
  return { tasks };
};

export default connect(mapStateToProps)(TaskList);
