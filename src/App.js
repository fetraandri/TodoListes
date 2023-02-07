import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [checkedTasks, setCheckedTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setCheckedTasks([...checkedTasks, e.target.value]);
    } else {
      setCheckedTasks(
        checkedTasks.filter((task) => task !== e.target.value)
      );
    }
  }

  return (
    <div className = "full">
      <div className = "todo">
      <form onSubmit={handleSubmit}>
      <h1>to do:</h1>
        <input
          type="text"
          placeholder="Nouvelle tâche"
          value={newTask}
          onChange={handleChange}
        />
        <button type="submit">Ajouter</button>
      </form>
     
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={task}
              name={task}
              value={task}
              onChange={handleCheck}
            />
            <label for={task}>{task}</label>
          </div>
        ))}
      </div>
      </div>
      <div className = "done">
        <h1>Done: </h1>
        <ul>
          {checkedTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
