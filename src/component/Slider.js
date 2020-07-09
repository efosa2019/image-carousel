import React, { useState } from "react";
import "../component/Slider.scss";
import Image from "../component/Image";
import i1 from "../component/pics/1.jpg";
import i2 from "../component/pics/2.jpg";
import i3 from "../component/pics/3.jpg";
import i4 from "../component/pics/4.jpg";
import i5 from "../component/pics/5.jpg";
function Slider() {
  let slideArr = [
    <Image src={i1} />,
    <Image src={i2} />,
    <Image src={i3} />,
    <Image src={i4} />,
    <Image src={i5} />,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (slideArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (slideArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {slideArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
export default Slider;
