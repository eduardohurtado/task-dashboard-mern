import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//Interfaces
interface IImage {
  image: {
    alt: string;
    height: string;
    src: any;
  };
}

const MyImage = ({ image }: IImage) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src}
      effect="blur"
    />
  </div>
);

export default MyImage;
