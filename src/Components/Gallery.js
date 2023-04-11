import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/global";

function Gallery() {
  const { getAnimePictures, pictures } = useGlobalContext();
  const { id } = useParams();

  //state
  const [index, setIndex] = React.useState(0);

  const handleImageClick = (i) => {
    setIndex(i);
  };

  React.useEffect(() => {
    getAnimePictures(id);
  }, [id]);

  return (
    <div>
      <div className="back">
        <Link to="/">
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </Link>
      </div>
      <div className="flex justify-center mb-10">
        <img
          className="w-[300px] rounded-lg"
          src={pictures[index]?.jpg.image_url}
          alt=""
        />
      </div>
      <div className="flex flex-col space-y-10 justify-center items-center">
        {pictures?.map((picture, i) => {
          return (
            <div
              className="image-con"
              onClick={() => {
                handleImageClick(i);
              }}
              key={i}
            >
              <img
                className="w-[300px] object-cover"
                src={picture?.jpg.image_url}
                style={{
                  border:
                    i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                  filter: i === index ? "grayscale(0)" : "grayscale(60%)",
                  transform: i === index ? "scale(1.1)" : "scale(1)",
                  transition: "all .3s ease-in-out",
                }}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
