import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasksByCategory,
  toggleTaskCompletion,
  editTask,
  deleteTask,
  selectCompletedTasks,
} from "../features/tasks/taskSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasksByCategory);
  const completedCount = useSelector(selectCompletedTasks);
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleEdit = useCallback(
    (id, title) => {
      setEditingId(id);
      setNewTitle(title);
    },
    [setEditingId, setNewTitle]
  );

  const handleSave = useCallback(() => {
    dispatch(editTask({ id: editingId, title: newTitle }));
    setEditingId(null);
  }, [dispatch, editingId, newTitle]);

  return (
    <div>
      <h3>Tasks ({completedCount} completed)</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              backgroundColor: "#f8f9fa",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{
                    flex: 1,
                    marginRight: "10px",
                    padding: "5px",
                  }}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    flex: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => dispatch(toggleTaskCompletion(task.id))}
                >
                  {task.title}
                </span>
                <button
                  onClick={() => handleEdit(task.id, task.title)}
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteTask(task.id))}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  X
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
