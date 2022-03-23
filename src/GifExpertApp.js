import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Zeus"]);

  return (
    <>
      <h2>GifsMiniApp</h2>
      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      <div className="descriptionOnMainPage">
        <h5>Guided project using Giphy api</h5>
      </div>
    </>
  );
};
