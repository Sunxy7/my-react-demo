import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import todo from '../pages/todo';
import login from '../pages/login';

// import ReactDOM from 'react-dom';

export default class RouterConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Redirect exact from='/' to='/todo'></Redirect>
                    <Route path='/todo' component={todo}></Route>
                    <Route path='/login' component={login}></Route>
                </Switch>
            </HashRouter>
        );
    }
}
