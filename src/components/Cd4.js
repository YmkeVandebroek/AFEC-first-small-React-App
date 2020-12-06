import React from "react";
import data from "../data/cds.json";

export default function Cd4() {
  return (
    <div>
      <h2>
        {data.cd[3].title}
      </h2>
      <h3>
        {data.cd[3].artist}
      </h3>
      <h4>
        {data.cd[3].year}
      </h4>
      <img src={data.cd[3].img}></img>
    </div>
  );
}
