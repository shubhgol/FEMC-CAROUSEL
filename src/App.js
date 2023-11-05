import { useState } from "react";
import "./styles.css";
const carouselItem = [
  {
    id: 10,
    imgSrc: "https://www.w3schools.com/howto/img_nature_wide.jpg"
  },
  {
    id: 11,
    imgSrc: "https://www.w3schools.com/howto/img_snow_wide.jpg"
  },
  {
    id: 12,
    imgSrc: "https://www.w3schools.com/howto/img_mountains_wide.jpg"
  }
];
export default function App() {
  const [activeItemId, setActiveItemId] = useState(10);

  const carouselHandler = (evenType = "prev") => {
    switch (evenType) {
      case "prev":
        if (carouselItem[0].id === activeItemId) {
          setActiveItemId(carouselItem[carouselItem.length - 1].id);
        } else {
          setActiveItemId(activeItemId - 1);
        }
      case "next":
        if (carouselItem[carouselItem.length - 1].id === activeItemId) {
          setActiveItemId(carouselItem[0].id);
        } else {
          setActiveItemId(activeItemId + 1);
        }
    }
  };
  return (
    <div className="carousel">
      {carouselItem.map(({ imgSrc, id }, index) => {
        return (
          <div
            key={id}
            className={`carouselItem ${activeItemId === id ? "show" : ""}`}
          >
            <img src={imgSrc} />
          </div>
        );
      })}
      <a className="prev" onClick={() => carouselHandler("prev")}>
        &#10094;
      </a>
      <a className="next" onClick={() => carouselHandler("next")}>
        &#10095;
      </a>
    </div>
  );
}
