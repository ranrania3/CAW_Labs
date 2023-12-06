import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  margin-bottom: 10px;
`;

const Input = styled.input`
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

  &:hover {
    background-color: #512da8;
  }
`;
function NewTaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTask(`Task ${Math.floor(Math.random() * 1000) + 1}: ${task}`);
      setTask('');
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input
        type="text"
        placeholder="Enter task description"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit">Add Task</Button>
    </Form>
  );
}

export default NewTaskForm;