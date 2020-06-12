import React from "react";

const Image = ({src, alt}) => {
  return (
      <img src={require(`images/${src}?webp`)} alt={alt}/>
  );
}

export default Image;