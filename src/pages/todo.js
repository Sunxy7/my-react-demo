import React, { Component } from 'react';
import ListItem from './listItem';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        isShowAddInfo: false,
        todoList: [
            { title: 'todo1', description: '待办1' },
            { title: 'todo2', description: '待办2' },
            { title: 'todo3', description: '待办3' }
        ],
        tmp: {
            title: '',
            description: ''
        }
    };

    showAdd = () => {
        this.setState({ isShowAddInfo: true });
    };

    hideAdd = () => {
        this.setState({ isShowAddInfo: false });
    };

    titleChange = (event) => {
        this.setState({
            tmp: {
                title: event.target.value,
                description: this.state.tmp.description
            }
        });
    };

    descriptionChange = (event) => {
        this.setState({
            tmp: {
                title: this.state.tmp.title,
                description: event.target.value
            }
        });
    };

    addItem = () => {
        const tmp = this.state.tmp;
        // const newList = this.state.todoList.concat(this.state.tmp);
        this.setState((preState) => ({
            todoList: preState.todoList.concat(tmp),
            tmp: {
                title: '',
                description: ''
            }
        }));
        // this.setState({
        //     todoList: newList,
        //     tmp: { title: '', description: '' }
        // });
        console.log('state', this.state);
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.todoList.map((item, index) => {
                        return <ListItem key={index} title={item.title} description={item.description} />;
                    })}
                </ul>
                {this.state.isShowAddInfo && (
                    <div>
                        <label>请输入待办事件信息</label>
                        <input placeholder='请输入事件title' value={this.state.tmp.title} onChange={this.titleChange} />
                        <input placeholder='请输入事件详细信息' value={this.state.tmp.description} onChange={this.descriptionChange} />
                        <button onClick={this.addItem}>确认添加</button>
                    </div>
                )}

                {this.state.isShowAddInfo ? <button onClick={this.hideAdd}>取消</button> : <button onClick={this.showAdd}>添加待办</button>}
            </div>
        );
    }
}
