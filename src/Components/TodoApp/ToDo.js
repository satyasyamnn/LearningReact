import React, { Component } from 'react';
import { AddNewToDoItem } from "./AddNewToDoItem";
import { TodoHeader } from "./TodoHeader";
import { ToDoItems } from "./ToDoItems";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam",
      todoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false }
      ],
      newItemText: ""
    };
  }

  changeUserData = () => {
    this.setState({
      userName: this.state.userName === "Adam" ? "Bob" : "Adam",
    });
  };

  AddNewTodoItem = (todoItem) => {
    console.log(todoItem);
    this.setState({
      todoItems: [...this.state.todoItems, todoItem]
    });
  };

  toggleTodo = (todo) => this.setState({ todoItems:
    this.state.todoItems.map(item => item.action === todo.action
    ? { ...item, done: !item.done } : item) });

  render() {
    return (<div className="container-fluid">
      <TodoHeader userName={this.state.userName} todoItems={this.state.todoItems} />
      <AddNewToDoItem onAddNewToDoItem={this.AddNewTodoItem} />
      <ToDoItems todoItems={this.state.todoItems} toggleTodo={this.toggleTodo}></ToDoItems>
    </div>);
  }
  ;
}
