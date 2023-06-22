import React, { useState } from "react";
import Button from "./Button";
import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    if (inputData.trim() !== "") {
      handleTaskAddition(inputData);
      setInputData("");
    } else {
      alert("Campo vazio! Você não inseriu nenhuma tarefa!");
    }
  };

  return (
    <div className="add-task-container">
      <input
	  placeholder="Insira o nome da tarefa"
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
