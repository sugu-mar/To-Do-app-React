import React from 'react';

export function EditPopup({
  setUserInput, userInput, editTask, setEditPopup, index, task, setTask,
}) {
  return (
    <div className="overlay">
      <div className="popupbox">
        <input
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter Task Details"
          value={userInput}
        ></input>
        <div className="controls">
          <button onClick={() => editTask(index)}>
            ✏️
          </button>
          <button
            onClick={() => {
              setEditPopup(false);
              setUserInput("");
            }}
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}
