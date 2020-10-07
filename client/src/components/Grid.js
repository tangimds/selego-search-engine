import React, { useEffect, useState } from "react";

import Card from "./Card";
import { PIXABAY_API_KEY } from "../config";

function Grid({ searchValue }) {
  const [images, setImages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("https://pixabay.com/api/?key=" + PIXABAY_API_KEY + "&q=" + searchValue + "+flowers&image_type=photo&pretty=true");
      const json = await resp.json();
      setImages(json);
    };
    fetchData();
  }, [searchValue]);

  return (
    <div
      style={{
        paddingTop: 20,
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gridGap: "5px",
      }}
    >
      {images &&
        images.hits &&
        images.hits.map((hit) => (
          <div key={hit.id}>
            <Card image={hit.webformatURL} />
          </div>
        ))}
    </div>
  );
}

export default Grid;
