import React, { Component } from 'react';

export class TodoHeader extends Component {
  render = () => {
    return (<div>
      <h4 className="bg-primary text-white text-center p-2">
        {this.props.userName}'s To Do List (Total items To Do {this.props.todoItems.filter(item => !item.done).length})
       </h4>
    </div>);
  };
}
