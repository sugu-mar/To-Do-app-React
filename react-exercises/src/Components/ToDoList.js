import React,{useState} from  "react";
import { EditPopup } from "./EditPopup";
import { Popup } from "./Popup";


function ToDoList() {
  const [popup, setPopup] = useState(false);
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState();
  const [userInput, setUserInput] = useState("");
  const [editpopup, setEditPopup] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function addNewTask() {
    if (userInput) {
      let currentTask = userInput;
      setNewTask(currentTask);
      setTask([...task, currentTask]);
    }

    setUserInput("");
    setPopup(false);
  }

  function editFun(t, index) {
    setEditPopup(true);
    setUserInput(t);
    setEditIndex(index);
  }

  function editTask(index) {
    const updatedTask = task.map((value, i) => {
      return index === i ? userInput : value;
    });
    setTask(updatedTask);
    setEditPopup(false);
    setUserInput("");
    setEditIndex(null);
  }

  function deleteFun(index) {
    setTask(
      task.filter((a, i) => {
        return i !== index;
      })
    );
  }

  function popupfun() {
    setPopup(true);
  }
  return (
    <>
      <h1>TODO LIST</h1>
      <button className="addButton" onClick={() => popupfun()}>
        Add Task
      </button>

      {popup && (
        <Popup
          setUserInput={setUserInput}
          addNewTask={addNewTask}
          userInput={userInput}
          setPopup={setPopup}
        />
      )}

      {editpopup && (
        <EditPopup
          setUserInput={setUserInput}
          userInput={userInput}
          editTask={editTask}
          setEditPopup={setEditPopup}
          setTask={setTask}
          index={editIndex}
          task={task}
        />
      )}

      <div>
        {task.map((t, index) => (
          <div className="taskList" key={index}>
            <p>{t}</p>
            <div className="displayTaskControls">
              <button onClick={() => editFun(t, index)}>Edit</button>
              <button onClick={() => deleteFun(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ToDoList