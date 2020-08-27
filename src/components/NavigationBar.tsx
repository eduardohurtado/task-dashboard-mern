import React, { Component } from "react";
import { Link } from "react-router-dom";

//Style SCSS
import "../sass/navigationBar.scss"

// interface IProps {}

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="navigationBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/TaskDashboard">Task Dashboard</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li className="navigationBar__item-r">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}
