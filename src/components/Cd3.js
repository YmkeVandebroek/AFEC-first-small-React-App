import React from "react";
import data from "../data/cds.json";

export default function Cd3() {
  return (
    <div>
      <h2>
        {data.cd[2].title}
      </h2>
      <h3>
        {data.cd[2].artist}
      </h3>
      <h4>
        {data.cd[2].year}
      </h4>
      <img src={data.cd[2].img}></img>
    </div>
  );
}
