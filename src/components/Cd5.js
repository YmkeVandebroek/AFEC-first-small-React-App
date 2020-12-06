import React from "react";
import data from "../data/cds.json";

export default function Cd5() {
  return (
    <div>
      <h2>
        {data.cd[4].title}
      </h2>
      <h3>
        {data.cd[4].artist}
      </h3>
      <h4>
        {data.cd[4].year}
      </h4>
      <img src={data.cd[4].img}></img>
    </div>
  );
}
