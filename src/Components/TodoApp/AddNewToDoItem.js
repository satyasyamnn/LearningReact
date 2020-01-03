import React, { Component } from 'react';

export class AddNewToDoItem extends Component {
  state = {
    newItemText: ''
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let newItem = { action: this.state.newItemText, done: false };
    this.props.onAddNewToDoItem(newItem);
  };
  updateTodoItemNewText = (event) => {
    this.setState({
      newItemText: event.target.value
    });
  };
  render = () => {
    return (<form onSubmit={this.handleSubmit}>
      <input className="form-control" type="text" placeholder="Add new To Do item" value={this.state.newItemText} onChange={this.updateTodoItemNewText} required></input>&nbsp;
        <button className="btn btn-primary mt-1">Add</button>
    </form>);
  };
}
