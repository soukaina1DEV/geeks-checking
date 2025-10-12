import React, { useState } from "react";

export default function ColumnLeft() {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list?limit=2");
    const data = await response.json();
    setImages(data);
  };

  return (
    <div className="p-4">
      <h5>Left column</h5>
      <button className="btn btn-primary my-2" onClick={getImages}>
        Get images
      </button>

      {images.map((img) => (
        <div key={img.id} className="my-2">
          <img
            src={img.download_url}
            alt={img.author}
            width="200"
            className="img-thumbnail"
          />
        </div>
      ))}
    </div>
  );
}
