import React, { Component } from "react";

//Components
import Tasks from "./Tasks";

//Style SCSS
import "../sass/tasksContainer.scss";

export default class TasksContainer extends Component {
  render() {
    return (
      <div className="tasksArea">
        <p>TODOS:</p>
        <div className="tasksArea__tasksContainer">
          <Tasks />
        </div>
      </div>
    );
  }
}
