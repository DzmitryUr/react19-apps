import React, { useState } from 'react';
import styles from './ToDoList.module.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>To-Do List</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className={styles.input}
        />
        <button onClick={addTask} className={styles.addButton}>
          Add
        </button>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((t, index) => (
          <li key={index} className={styles.taskItem}>
            <span>{t}</span>
            <button
              onClick={() => removeTask(index)}
              className={styles.removeButton}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
