import React, { Component } from 'react';
import { ToDoItem } from "./ToDoItem";

export class ToDoItems extends Component {
  render = () => {
    return (<div>
      {this.props.todoItems.map(todoItem => <ToDoItem key={todoItem.action} action={todoItem.action} done={todoItem.done}  toggleTodo={this.props.toggleTodo} />)}
    </div>);
  };
}
