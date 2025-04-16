import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id} // Ensures a unique "key" prop
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;


