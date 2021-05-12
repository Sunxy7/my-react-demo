import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router';
// import TodoList from '@/pages/todoList';
// import Login from '@/pages/login';

// import ReactDOM from 'react-dom';

export default class RouterConfig extends Component {
    render() {
        return (
            <Router>
                <Redirect to='/'></Redirect>
                <Route
                    path='/'
                    compoent={() => {
                        import('../pages/todo');
                    }}></Route>
                <Route
                    path='/login'
                    compoent={() => {
                        import('../pages/login');
                    }}></Route>
            </Router>
        );
    }
}
