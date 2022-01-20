import './App.css';
import React from 'react';

function App() {
 const { useState } = React;

  const AddTaskForm = ({ addTask }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
      value && addTask(value)
      setValue("");
    };


  return <div id="root"></div>;
}

export default App;
