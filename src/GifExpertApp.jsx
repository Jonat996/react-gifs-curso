import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [Categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (input) => {
    if (Categories.includes(input)) return;

    setCategories([input, ...Categories]);
  };

  return (
    <>
      <h1> GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {Categories.map((categoria) => (
        <GifGrid key={categoria} category={categoria} />
      ))}
    </>
  );
};
