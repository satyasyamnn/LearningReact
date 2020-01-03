import React, { Component } from 'react';
export class ToDoItem extends Component {
  constructor(props)
  {
    super(props);
    this.state = {action: this.props.action, done: this.props.done};
  }

  toggleToDo = (event) => {
    this.setState({
      done: !this.state.done
    });
    let modifiedToItem = {action: this.state.action, done: this.state.done}
    this.props.toggleTodo(modifiedToItem);
  }


  render = () => {
    return (
      <div>
        <div>
          {this.state.action}  
          <input type="checkbox" checked={this.state.done} onChange={this.toggleToDo}></input>
       </div>
    </div>);
  };
}
