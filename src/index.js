import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './pages/todo';
import Router from './router';

ReactDOM.render(
    <React.StrictMode>
        <TodoList />
    </React.StrictMode>,
    document.getElementById('root')
);

// ReactDOM.render(Router);
