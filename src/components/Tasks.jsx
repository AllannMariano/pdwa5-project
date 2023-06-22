import React from "react";

import Task from "./Task";

import "./Tasks.css";


const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
	return (
		<>
			{tasks.length === 0 ? (
				<p className="no-tasks-message">Você não possui nenhuma tarefa!</p>
			) : (
				tasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						handleTaskClick={handleTaskClick}
						handleTaskDeletion={handleTaskDeletion}
					/>
				))
			)}
		</>
	);
};

export default Tasks;
