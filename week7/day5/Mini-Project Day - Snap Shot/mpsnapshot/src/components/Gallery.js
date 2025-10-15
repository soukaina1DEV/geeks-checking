import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Gallery({ category }) {
  const { query } = useParams();
  const [images, setImages] = useState([]);

  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const term = query || category;
        const response = await axios.get("https://api.pexels.com/v1/search", {
          headers: {
            Authorization: API_KEY,
          },
          params: {
            query: term,
            per_page: 30,
          },
        });
        setImages(response.data.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, [category, query]);

  return (
    <div className="gallery-container">
      <h2>{query ? `${query} Pictures` : `${category} Pictures`}</h2>
      <div className="gallery">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.src.medium}
            alt={img.photographer}
            className="gallery-img"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
