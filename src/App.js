import React, { useState } from "react";
import Group from "./components/Group";

function App() {
  // объеденить в 2 объекта и объектом прокидвать меньше говнокода буде
  let [title, setTitle] = useState(
    "Оригинальность, заимствования и цитирование"
  );
  let [subtitle, setSubtitle] = useState(
    "Отношение параметров относительно общего объема текста."
  );
  let [info, setInfo] = useState([
    {
      title: "Оригинальность",
      fill: "linear-gradient(212.08deg, #7C8EB5 0%, #37476A 100%)",
      dotfill: "linear-gradient(301.36deg, #7C8EB5 -30.27%, #37476A 119.56%)",
      shadow: "",
      img: "./img/lamp-on.svg",
      value: 30,
    },
    {
      title: "Заимствования",
      fill: "linear-gradient(32.08deg, #2477F4 0%, #3A86FA 100%)",
      dotfill: "linear-gradient(32.08deg, #2477F4 0%, #3A86FA 100%)",
      img: "./img/quote-down-square.svg",
      shadow: "-2px 2px 12px rgba(12, 79, 180, 0.45)",
      value: 90,
    },
    {
      title: "Цитирование",
      fill: "linear-gradient(225deg, #FFB800 0%, #FFB800 0.01%, #FF9900 100%)",
      dotfill: "#FFAA00",
      img: "./img/quote-down-square.svg",
      shadow: "-2px 2px 12px rgba(219, 153, 20, 0.6)",
      value: 60,
    },
  ]);
  // console.log(1);
  return (
    <div className="wrapper">
      <Group title={title} subtitle={subtitle} obj={info} />
    </div>
  );
}

export default App;
