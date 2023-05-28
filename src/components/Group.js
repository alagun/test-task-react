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
      <div className="description">
        <div className="description-item">
          <h3 className="desritpion-title">{obj[0].title}</h3>
          <span className="desritpion-text">
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit cupiditate exercitationem blanditiis. Commodi, impedit sint eaque quibusdam quis debitis consectetur nostrum soluta sequi odit. Quas dicta vero dignissimos quo!"
            }
          </span>
          <br />
          <span className="desritpion-text">
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit cupiditate exercitationem blanditiis. Commodi, impedit sint eaque quibusdam quis debitis consectetur nostrum soluta sequi odit. Quas dicta vero dignissimos quo!"
            }
          </span>
        </div>
        <div className="description-item">
          <h3 className="desritpion-title">{obj[1].title}</h3>
          <span className="desritpion-text">
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit cupiditate exercitationem blanditiis. Commodi, impedit sint eaque quibusdam quis debitis consectetur nostrum soluta sequi odit. Quas dicta vero dignissimos quo!"
            }
          </span>
          <br />
          <span className="desritpion-text">
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit cupiditate exercitationem blanditiis. Commodi, impedit sint eaque quibusdam quis debitis consectetur nostrum soluta sequi odit. Quas dicta vero dignissimos quo!"
            }
          </span>
        </div>
        <div className="description-item">
          <h3 className="desritpion-title">{obj[2].title}</h3>
          <span className="desritpion-text">
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit cupiditate exercitationem blanditiis. Commodi, impedit sint eaque quibusdam quis debitis consectetur nostrum soluta sequi odit. Quas dicta vero dignissimos quo!"
            }
          </span>
          <br />
          <span className="desritpion-text">
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit cupiditate exercitationem blanditiis. Commodi, impedit sint eaque quibusdam quis debitis consectetur nostrum soluta sequi odit. Quas dicta vero dignissimos quo!"
            }
          </span>
        </div>
      </div>
    </div>
  );
}
