import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <div className="details">
        <p>{text}</p>
        <small>{category}</small>
      </div>
      <button onClick={onDelete} className="delete-button">X</button>
    </div>
  );
}

export default Task;

