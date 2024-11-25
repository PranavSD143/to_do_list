import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // State to manage tasks
  const [to_do, setToDo] = useState([
    { id: 1, task: "Work" },
    { id: 2, task: "Work" },
    { id: 3, task: "Work" },
  ]);

  // State for the input value
  const [newTask, setNewTask] = useState("");

  // Handle input change
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // Add a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setToDo([
        ...to_do,
        { id: Date.now(), task: newTask }, // Add the new task
      ]);
      setNewTask(""); // Clear the input field
    }
  };

  // Remove a task when the checkbox is clicked
  const removeTask = (id) => {
    setToDo(to_do.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ul className="tasks-main-container">
        {to_do.map((item) => (
          <li key={item.id} className="tasks-sub-container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "50px",
                height: "100%",
              }}
            >
              <input
                type="checkbox"
                name={item.id}
                onChange={() => removeTask(item.id)} // Remove task on checkbox click
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.task}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="button-container">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button type="button" className="add-task-button" onClick={addTask}>
          Add a new Task
        </button>
      </div>
    </div>
  );
}


export default App
