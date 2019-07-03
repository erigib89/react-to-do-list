import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    render(props) {
        return (
            <div className="toDo-list">
                {this.props.items.map(item => <ToDoItem key={item.id} item={item} onDelete={this.props.onDelete}/>)}
            </div>
        );
    }
}

export default ToDoList;