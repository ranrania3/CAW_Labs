import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUser = { username, password };
    setUsers([...users, newUser]);


    setUsername('');
    setPassword('');
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleFormSubmit} className="form-container">
        <label>
          Username:
          <input
          required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
          required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username}{' '}
            <button onClick={() => handleDeleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
