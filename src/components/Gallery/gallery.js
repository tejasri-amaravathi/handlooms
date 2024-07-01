import React from "react";
import "./gallery.css";
import image1 from "../../images/galleryImage1.jpeg";
import image2 from "../../images/galleryImage2.jpeg";
import image3 from "../../images/galleryImage3.jpeg";
import image4 from "../../images/galleryImage4.jpeg";
import image5 from "../../images/galleryImage5.jpeg";
import image6 from "../../images/galleryImage6.jpeg";
import image7 from "../../images/galleryImage7.jpeg";
import image8 from "../../images/galleryImage8.jpeg";
import image9 from "../../images/galleryImage9.jpeg";
import image10 from "../../images/galleryImage10.jpeg";

const Gallery = () => {
  return (
    <div>
      <img src={image1} className={"image"} />
      <img src={image2} className={"image"} />
      <img src={image3} className={"image"} />
      <img src={image4} className={"image"} />
      <img src={image5} className={"image"} />
      <img src={image6} className={"image"} />
      <img src={image7} className={"image"} />
      <img src={image8} className={"image"} />
      <img src={image9} className={"image"} />
      <img src={image10} className={"image"} />
    </div>
  );
};

export default Gallery;
