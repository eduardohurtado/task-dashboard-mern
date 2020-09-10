import React, { Component } from "react";

//Style SCSS
import "../sass/homePage.scss";

//Images
import LogoHtml from "../img/html-5.png";
import LogoScss from "../img/scss.png";
import LogoReact from "../img/react.png";
import LogoRedux from "../img/redux.png";
import LogoTs from "../img/typescript.png";
import LogoMongoDb from "../img/mongodb.png";
import LogoExpress from "../img/express.png";
import LogoNodeJs from "../img/nodejs.png";
import LogojQuery from "../img/jquery.png";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <h1 className="homeTitle">Welcome :)</h1>
        <p>
          Welcome to my application, this app is useful to create dialy tasks
          that can be deleted, and marked as complete, please enjoy.
        </p>
        <h2>Main technologies:</h2>

        <img src={LogoHtml} alt="Html5" height="110px" />
        <img src={LogoTs} alt="Typescript" height="110px" />
        <img src={LogoScss} alt="SCSS" height="110px" />
        <img src={LogojQuery} alt="jQuery" height="110px" />
        <img src={LogoRedux} alt="Redux" height="110px" />

        <h2>MERN stack:</h2>
        <h3 className="grayIncoming">
          *Gray icons means that feature is in current develop*
        </h3>
        <img
          src={LogoMongoDb}
          alt="MongoDb"
          height="110px"
          className="grayIncoming"
        />
        <img
          src={LogoExpress}
          alt="Express"
          height="110px"
          className="grayIncoming"
        />
        <img src={LogoReact} alt="React" height="110px" />
        <img
          src={LogoNodeJs}
          alt="NodeJs"
          height="110px"
          className="grayIncoming"
        />
      </div>
    );
  }
}
