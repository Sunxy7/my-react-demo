import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import TodoList from './pages/todo';
import RouterConfig from './router/index';

ReactDOM.render(
    <React.StrictMode>
        <RouterConfig />
    </React.StrictMode>,
    document.getElementById('root')
);

// ReactDOM.render(Router);
