import React from 'react';
import './ToDoForm.css';

class ToDoForm extends React.Component {
    state = { toDoInput: ''}

    handleSubmit = (event) => {
        event.preventDefault();
        const userInput = this.state.toDoInput;
        this.props.toDoAction(userInput)
        this.setState({toDoInput: ''});
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                       placeholder="Enter an item..." 
                       className="toDo-input" 
                       value={this.state.toDoInput} 
                       onChange={event => this.setState({toDoInput: event.target.value})}></input>
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default ToDoForm;