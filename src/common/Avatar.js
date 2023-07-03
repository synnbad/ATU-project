import React from "react";
import "./Avatar.css";

const Avatar = ({ imageSrc, altText }) => {
  return <img className="avatar" src={imageSrc} alt={altText} />;
};

export default Avatar;
