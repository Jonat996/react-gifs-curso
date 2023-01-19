import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card" key={id}>
      <h4>{title} </h4>
      <img src={url} alt="imagen gif"  />
    </div>
  );
};
