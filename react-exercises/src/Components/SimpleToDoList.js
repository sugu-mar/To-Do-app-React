import React,{useState} from 'react'

const SimpleToDoList = () => {

    const [userInput,setUserInput] =   useState("")

    const [task,setTask] = useState([]);

    function deleteTask(index) {
  
      setTask(task.filter((val,ind)=>(ind !== index  )));
    }


    function editTask(index) {

setTask(task.map((val,ind)=>{return ind == index?userInput:val }))

    }
    

  return (
    <div>
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <button
        onClick={() => {
          let taskSetter = [...task, userInput];
          setTask(taskSetter);
          console.log(taskSetter);
          setUserInput("");
        }}
      >
        Add
      </button>

      <div>
        {task.map((t, index) => {
          return (
            <div key={index}>
              <p>{t}</p>
              <button onClick={() => deleteTask(index)}>Delete</button>
              <button onClick={() => editTask(index)}>edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SimpleToDoList