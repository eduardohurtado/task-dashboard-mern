import React, { Component } from "react";

//Tools
import LazyImage from "./tools/LazyImage";

//Style SCSS
import "../sass/footer.scss";

export default class Footer extends Component {
  render() {
    const imageLogoGit = {
      alt: "MongoDb",
      width: "40px",
      height: "40px",
      src: "./src/img/github.png",
    };

    const imageLogoLinkedIn = {
      alt: "MongoDb",
      width: "40px",
      height: "40px",
      src: "./src/img/linkedin.png",
    };

    const imageLogoWebpack = {
      alt: "MongoDb",
      width: "104px",
      height: "30px",
      src: "./src/img/webpack.png",
    };

    return (
      <div className="footer">
        <a
          href="https://github.com/eduardohurtado"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="rowWrap">
            <LazyImage
              alt={imageLogoGit.alt}
              width={imageLogoGit.width}
              height={imageLogoGit.height}
              src={imageLogoGit.src}
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/eduardo-hurtado-g/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="rowWrap">
            <LazyImage
              alt={imageLogoLinkedIn.alt}
              width={imageLogoLinkedIn.width}
              height={imageLogoLinkedIn.height}
              src={imageLogoLinkedIn.src}
            />
          </div>
        </a>
        <div className="itemR">
          <LazyImage
            alt={imageLogoWebpack.alt}
            width={imageLogoWebpack.width}
            height={imageLogoWebpack.height}
            src={imageLogoWebpack.src}
          />
        </div>
        <div className="itemR-2">
          <p id="pBy">Powered by:</p>
        </div>
      </div>
    );
  }
}
