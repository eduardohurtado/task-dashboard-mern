import React, { Component } from "react";

//Tools
import LazyImage from "./tools/LazyImage/LazyImage";

//Style SCSS
import "../sass/contactPage.scss";

export default class ContactPage extends Component {
  render() {
    // const placeholder = (<div className="holder"></div>);

    var imageImgDev = {
      alt: "Developer",
      width: "50%",
      height: "auto",
      src: "https://live.staticflickr.com/65535/50337942126_62e60b31c9_o.png",
    };

    return (
      <div className="contactPage">
        <LazyImage
          alt={imageImgDev.alt}
          width={imageImgDev.width}
          height={imageImgDev.height}
          src={imageImgDev.src}
        />

        <div className="content">
          <h1 className="contactTitle">Contact me:</h1>
          <p>
            You can follow me on my personal{" "}
            <a
              href="https://github.com/eduardohurtado"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>{" "}
            account, or in my personal{" "}
            <a
              href="https://www.linkedin.com/in/eduardo-hurtado-g/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            account.
          </p>
        </div>
      </div>
    );
  }
}
