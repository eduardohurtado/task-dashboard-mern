import React, { Component } from "react";

//Tools
import LazyImage from "./tools/LazyImage";

//Style SCSS
import "../sass/homePage.scss";

export default class HomePage extends Component {
  render() {
    const imageLogoHtml = {
      alt: "Html5",
      width: "79px",
      height: "110px",
      src: "./src/img/html-5.png",
    };
    const imageLogoTs = {
      alt: "Typescript",
      width: "110px",
      height: "110px",
      src: "./src/img/typescript.png",
    };
    const imageLogoScss = {
      alt: "Sass",
      width: "148px",
      height: "110px",
      src: "./src/img/scss.png",
    };
    const imageLogojQuery = {
      alt: "jQuery",
      width: "110px",
      height: "110px",
      src: "./src/img/jquery.png",
    };
    const imageLogoRedux = {
      alt: "Redux",
      width: "86px",
      height: "110px",
      src: "./src/img/redux.png",
    };

    const imageLogoMongoDb = {
      alt: "MongoDb",
      width: "172px",
      height: "110px",
      src: "./src/img/mongodb.png",
    };

    const imageLogoExpress = {
      alt: "Express",
      width: "110px",
      height: "110px",
      src: "./src/img/express.png",
    };

    const imageLogoReact = {
      alt: "ReactJs",
      width: "96px",
      height: "110px",
      src: "./src/img/react.png",
    };

    const imageLogoNodeJs = {
      alt: "MongoDb",
      width: "101px",
      height: "110px",
      src: "./src/img/nodejs.png",
    };

    return (
      <div className="homePage">
        <h1 className="homeTitle">Welcome :)</h1>
        <p>
          Welcome to my application, this app is useful to create dialy tasks
          that can be deleted, and marked as complete, please enjoy.
        </p>
        <h2>Complementary technologies:</h2>
        <div className="rowWrap">
          <LazyImage
            alt={imageLogoHtml.alt}
            width={imageLogoHtml.width}
            height={imageLogoHtml.height}
            src={imageLogoHtml.src}
          />

          <LazyImage
            alt={imageLogoTs.alt}
            width={imageLogoTs.width}
            height={imageLogoTs.height}
            src={imageLogoTs.src}
          />

          <LazyImage
            alt={imageLogoScss.alt}
            width={imageLogoScss.width}
            height={imageLogoScss.height}
            src={imageLogoScss.src}
          />

          <LazyImage
            alt={imageLogojQuery.alt}
            width={imageLogojQuery.width}
            height={imageLogojQuery.height}
            src={imageLogojQuery.src}
          />

          <LazyImage
            alt={imageLogoRedux.alt}
            width={imageLogoRedux.width}
            height={imageLogoRedux.height}
            src={imageLogoRedux.src}
          />
        </div>
        <h2>MERN stack:</h2>
        <h3 className="grayIncoming">
          *Gray icons means that feature is in current develop*
        </h3>
        <div className="rowWrap">
          <div className="grayIncoming">
            <LazyImage
              alt={imageLogoMongoDb.alt}
              width={imageLogoMongoDb.width}
              height={imageLogoMongoDb.height}
              src={imageLogoMongoDb.src}
            />
          </div>
          <div className="grayIncoming">
            <LazyImage
              alt={imageLogoExpress.alt}
              width={imageLogoExpress.width}
              height={imageLogoExpress.height}
              src={imageLogoExpress.src}
            />
          </div>

          <LazyImage
            alt={imageLogoReact.alt}
            width={imageLogoReact.width}
            height={imageLogoReact.height}
            src={imageLogoReact.src}
          />

          <div className="grayIncoming">
            <LazyImage
              alt={imageLogoNodeJs.alt}
              width={imageLogoNodeJs.width}
              height={imageLogoNodeJs.height}
              src={imageLogoNodeJs.src}
            />
          </div>
        </div>
      </div>
    );
  }
}
