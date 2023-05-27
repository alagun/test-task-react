import React, { useState } from "react";
import Progress from "./Progress";

export default function Group({ title, subtitle, obj }) {
  let information = obj.map((el, index) => <Progress key={index} obj={el} />);

  const [angle, setAngle] = useState(0);
  const [active, setActive] = useState("");

  const openDrop = () => {
    if (angle === 90) {
      setAngle(0);
      setActive("");
    } else {
      setAngle(90);
      setActive("active");
    }
  };
  return (
    <div className={`section ${active}`}>
      <div className="section__title">
        <div
          onClick={openDrop}
          className="dropdown arrow"
          style={{
            backgroundImage: `url(./img/arrow-down.svg)`,
            transform: `rotate(${angle}deg)`,
          }}
        ></div>
        <span>{title}</span>
      </div>
      <div className="section__subtitle">
        <span>{subtitle}</span>
      </div>
      <div className="stats">{information}</div>
    </div>
  );
}
