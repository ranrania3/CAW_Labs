import React, { useState } from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

const SubtaskContainer = styled.div`
  margin-left: 20px;
`;

const Subtask = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const SubtaskButton = styled.button`
padding: 5px ;
background-color: #673ab7;
color: #fff;
border: none;
cursor: pointer;
border-radius: 3px;
transition: background-color 0.3s ease-in-out;
margin: 5px;
margin-left:10px;
&:hover {
  background-color: #512da8;
}
`;
const SubtaskInput = styled.input`
flex: 1;
padding: 8px;
margin-right: 8px;
border: 1px solid #673ab7;
border-radius: 4px;
`;
const Button = styled.button`
  padding: 8px 12px;
  background-color: #673ab7;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  margin: 5px;
  margin-left:10px;
  &:hover {
    background-color: #512da8;
  }
`;
function Task({ task, deleteTask, addSubtask, markSubtaskDone }) {
  const [showSubtaskInput, setShowSubtaskInput] = useState(false);
  const [subtaskDescription, setSubtaskDescription] = useState('');

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  const handleAddSubtask = () => {
    setShowSubtaskInput(true);
  };

  const handleSubtaskInputChange = (e) => {
    setSubtaskDescription(e.target.value);
  };

  const handleSubtaskSubmit = () => {
    if (subtaskDescription.trim() !== '') {
      addSubtask(task.id, subtaskDescription);
      setSubtaskDescription('');
      setShowSubtaskInput(false);
    }
  };

  const handleMarkSubtaskDone = (subtaskId) => {
    markSubtaskDone(task.id, subtaskId);
  };

  return (
    <TaskContainer>
      <div>
        <strong>{task.description}</strong>
        <Button onClick={handleDeleteTask}>Delete</Button>
        <Button onClick={handleAddSubtask}>Add Sub-Tasks</Button>
      </div>
      {showSubtaskInput && (
        <div>
          <SubtaskInput
            type="text"
            placeholder="Enter subtask description"
            value={subtaskDescription}
            onChange={handleSubtaskInputChange}
          />
          <Button onClick={handleSubtaskSubmit}>Add Subtask</Button>
        </div>
      )}
      {task.subtasks.map((subtask) => (
        <SubtaskContainer key={subtask.id}>
          <Subtask>
            {subtask.done ? <s>{subtask.description}</s> : subtask.description}
            {!subtask.done && (
              <SubtaskButton onClick={() => handleMarkSubtaskDone(subtask.id)}>DONE</SubtaskButton>
            )}
          </Subtask>
        </SubtaskContainer>
      ))}
    </TaskContainer>
  );
}

export default Task;
