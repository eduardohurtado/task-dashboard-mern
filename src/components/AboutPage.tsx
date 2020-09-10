import React, { Component } from "react";

//Tools
import LazyImage from "./tools/LazyImage";

//Style SCSS
import "../sass/aboutPage.scss";

//Images
import Mern1 from "../img/mern-stack-1.png";

export default class AboutPage extends Component {
  render() {
    const mystyles = {
      color: "green",
    } as React.CSSProperties;

    const imageMern = {
      alt: "MongoDb",
      width: "300",
      height: "143",
      src: Mern1,
    };

    return (
      <div className="aboutPage">
        <div className="empty"></div>
        <div className="container">
          <h1 className="aboutTitle">I'm glad to have you here!</h1>
          <p>
            This software was born as a personal practice to improve skills in
            ReactJS and the Node environment, also, this is a React-Router multi
            tab and mobile first application.
          </p>
          <h2 className="center">MERN Stack</h2>
          <p>
            What is the MERN Stack? MERN stands for MongoDB, Express, React,
            Node, after the four key technologies that make up the stack.
          </p>

          <ul>
            <li>MongoDB - document database</li>
            <li>Express(.js) - Node.js web framework</li>
            <li>React(.js) - a client-side JavaScript framework</li>
            <li>Node(.js) - the premier JavaScript web server</li>
          </ul>

          <p>
            MERN is one of several variations of the{" "}
            <b style={mystyles}>MEAN stack</b> (MongoDB Express Angular Node),
            where the traditional Angular.js frontend framework is replaced with
            React.js. Other variants include MEVN (MongoDB, Express, Vue, Node),
            and really any frontend JavaScript framework can work.
            <br />
            Express and Node make up the middle (application) tier. Express.js
            is a server-side web framework, and Node.js the popular and powerful
            JavaScript server platform. Regardless of which variant you choose,
            ME(RVA)N is the ideal approach to working with JavaScript and JSON,
            all the way through.
          </p>
          <h2>How does the MERN stack work?</h2>
          <p>
            The MERN architecture allows you to easily construct a 3-tier
            architecture (frontend, backend, database) entirely using JavaScript
            and JSON.
          </p>
          <div className="center">
            <LazyImage
              alt={imageMern.alt}
              width={imageMern.width}
              height={imageMern.height}
              src={imageMern.src}
            />
          </div>
        </div>
      </div>
    );
  }
}
