import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import WeatherInfo from './components/WeatherInfo';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/authSlice';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <header>
        <h1>Advanced To-Do App</h1>
        {isAuthenticated ? (
          <button onClick={() => dispatch(logout())}>Logout</button>
        ) : (
          <button onClick={() => dispatch(login())}>Login</button>
        )}
      </header>
      {isAuthenticated ? (
        <>
          <TaskInput />
          <TaskList />
          <WeatherInfo />
        </>
      ) : (
        <p>Please log in to view your tasks.</p>
      )}
    </div>
  );
}

export default App;
