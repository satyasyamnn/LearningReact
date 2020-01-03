import React, { Component } from 'react';
import ToDo from './Components/TodoApp/ToDo';
import GitHub from './Components/gitHubCard/GitHubCard';
import './Components/gitHubCard/GitHubCard.css'

export default class App extends Component {
  render() {
    return(
    <div className="container-fluid">
      <ToDo></ToDo>
      <GitHub></GitHub>
    </div>    
    );
  };
}