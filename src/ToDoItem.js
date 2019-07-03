import React from 'react';
import './ToDoItem.css';

class ToDoItem extends React.Component {
    state = {
        isDone: false
    };

    toggleDone = () => {
        const isDone = this.state.isDone;
        this.setState({isDone: !isDone});
    }

    deleteItem = () => {
        const itemKey = this.props.item.id;
        this.props.onDelete(itemKey);
    }

    render(props) {
        return(
            <div className="toDo-row">
                <hr />
                <div className="toDo-item">
                    <input type="checkbox" onClick={this.toggleDone}></input>
                    <div className="toDo-action">
                        {this.state.isDone ? (
                            <s>{this.props.item.action}</s>
                        ) : (
                            this.props.item.action
                        )}
                    </div>
                    <div className="toDo-delete" onClick={this.deleteItem}>X</div>
                </div>
            </div>
        );
    }
}

export default ToDoItem;