import React from 'react';

export function Popup({ setUserInput, addNewTask, userInput, setPopup }) {
  return (
    <div className="overlay">
      <div className="popupbox">
        <input
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter Task Details"
          value={userInput}
        ></input>
        <div className="controls">
          <button onClick={() => addNewTask()}>✅</button>
          <button onClick={() => { setPopup(false); setUserInput(""); }}>❌</button>
        </div>
      </div>
    </div>
  );
}
