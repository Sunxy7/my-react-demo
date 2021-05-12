import { Component } from 'react';

export default class ListItem extends Component {
    render() {
        return (
            <li>
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
            </li>
        );
    }
}
