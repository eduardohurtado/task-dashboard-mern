import React, { Component } from "react";

//Tools
import LazyImage from "./tools/LazyImage/LazyImage";

//Style SCSS
import "../sass/homePage.scss";

export default class HomePage extends Component {
  render() {
    const imageLogoHtml = {
      alt: "Html5",
      width: "79px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50333700817_1d6375276a_o.png",
    };
    const imageLogoTs = {
      alt: "Typescript",
      width: "110px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50333700657_6a3caac13f_o.png",
    };
    const imageLogoScss = {
      alt: "Sass",
      width: "148px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50333538596_c10e3d4982_o.png",
    };
    const imageLogojQuery = {
      alt: "jQuery",
      width: "110px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50333700787_ae6338edc8_o.png",
    };
    const imageLogoReduxSaga = {
      alt: "Redux Saga",
      width: "141px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50356118402_622d1aa218_o.png",
    };

    const imageLogoMongoDb = {
      alt: "MongoDb",
      width: "172px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50333700712_c834451cba_o.png",
    };

    const imageLogoExpress = {
      alt: "Express",
      width: "110px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50333700847_d060513f89_o.png",
    };

    const imageLogoReact = {
      alt: "ReactJs",
      width: "96px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50333538611_21d3ce9e96_o.png",
    };

    const imageLogoNodeJs = {
      alt: "MongoDb",
      width: "101px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50332852038_40d099da0f_o.png",
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
          <div className="marginPhoto">
            <LazyImage
              alt={imageLogoHtml.alt}
              width={imageLogoHtml.width}
              height={imageLogoHtml.height}
              src={imageLogoHtml.src}
            />
          </div>
          <div className="marginPhoto">
            <LazyImage
              alt={imageLogoTs.alt}
              width={imageLogoTs.width}
              height={imageLogoTs.height}
              src={imageLogoTs.src}
            />
          </div>
          <div className="marginPhoto">
            <LazyImage
              alt={imageLogoScss.alt}
              width={imageLogoScss.width}
              height={imageLogoScss.height}
              src={imageLogoScss.src}
            />
          </div>
          <div className="marginPhoto">
            <LazyImage
              alt={imageLogojQuery.alt}
              width={imageLogojQuery.width}
              height={imageLogojQuery.height}
              src={imageLogojQuery.src}
            />
          </div>
          <div className="marginPhoto">
            <LazyImage
              alt={imageLogoReduxSaga.alt}
              width={imageLogoReduxSaga.width}
              height={imageLogoReduxSaga.height}
              src={imageLogoReduxSaga.src}
            />
          </div>
        </div>
        <h2>MERN stack:</h2>
        <div className="rowWrap">
          <div className="marginPhoto">
            <LazyImage
              alt={imageLogoMongoDb.alt}
              width={imageLogoMongoDb.width}
              height={imageLogoMongoDb.height}
              src={imageLogoMongoDb.src}
            />
          </div>
          <div className="marginPhoto">
            <LazyImage
              alt={imageLogoExpress.alt}
              width={imageLogoExpress.width}
              height={imageLogoExpress.height}
              src={imageLogoExpress.src}
            />
          </div>
          <div className="marginPhoto">
            <LazyImage
              alt={imageLogoReact.alt}
              width={imageLogoReact.width}
              height={imageLogoReact.height}
              src={imageLogoReact.src}
            />
          </div>
          <div className="marginPhoto">
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
