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
      src: "https://live.staticflickr.com/65535/50375762576_b01ac0b821_o.png",
    };
    const imageLogoTs = {
      alt: "Typescript",
      width: "110px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50375934352_e29b64610c_o.png",
    };
    const imageLogoScss = {
      alt: "Sass",
      width: "148px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50375773251_a6687d4fac_o.png",
    };
    const imageLogojQuery = {
      alt: "jQuery",
      width: "110px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50375081263_aaf39d097d_o.png",
    };
    const imageLogoReduxSaga = {
      alt: "Redux Saga",
      width: "141px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50375954397_4622f014e7_o.png",
    };

    const imageLogoMongoDb = {
      alt: "MongoDb",
      width: "172px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50375005883_42c309563a_o.png",
    };

    const imageLogoExpress = {
      alt: "Express",
      width: "110px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50375043378_4a8b260ebb_o.png",
    };

    const imageLogoReact = {
      alt: "ReactJs",
      width: "96px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50375049578_86298fb86b_o.png",
    };

    const imageLogoNodeJs = {
      alt: "MongoDb",
      width: "101px",
      height: "110px",
      src: "https://live.staticflickr.com/65535/50375055268_d232b7d345_o.png",
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
