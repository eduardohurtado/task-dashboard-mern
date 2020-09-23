import React, { Component } from "react";

//Tools
import LazyImage from "./tools/LazyImage/LazyImage";

//Style SCSS
import "../sass/footer.scss";

export default class Footer extends Component {
  render() {
    const imageLogoGit = {
      alt: "LogoGit",
      width: "40px",
      height: "40px",
      src: "https://live.staticflickr.com/65535/50375858387_0b21b6af07_o.png",
    };

    const imageLogoLinkedIn = {
      alt: "LogoLinkedIn",
      width: "40px",
      height: "40px",
      src: "https://live.staticflickr.com/65535/50375683541_764c299e4b_o.png",
    };

    const imageLogoWebpack = {
      alt: "LogoWebpack",
      width: "104px",
      height: "30px",
      src: "https://live.staticflickr.com/65535/50375606586_46902351c9_o.png",
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
