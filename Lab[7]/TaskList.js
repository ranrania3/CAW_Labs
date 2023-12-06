import React, { useState } from 'react';
import styled from 'styled-components';
import NewTaskForm from './NewTaskForm';
import Task from './Task';

const TaskListContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  background-color: #f4f0ff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 50px;
  color: #673ab7;
  text-align: center;
  margin-bottom: 20px;
`;

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskCount, setTaskCount] = useState(1);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: taskCount, description: newTask, subtasks: [] }]);
    setTaskCount(taskCount + 1);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const addSubtask = (taskId, subtaskDescription) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          subtasks: [...task.subtasks, { id: task.subtasks.length + 1, description: subtaskDescription, done: false }],
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const markSubtaskDone = (taskId, subtaskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          subtasks: task.subtasks.map((subtask) => {
            if (subtask.id === subtaskId) {
              return { ...subtask, done: true };
            }
            return subtask;
          }),
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <TaskListContainer>
      <Title>Task List</Title>
      <NewTaskForm addTask={addTask} />
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} addSubtask={addSubtask} markSubtaskDone={markSubtaskDone} />
      ))}
    </TaskListContainer>
  );
}

export default TaskList;