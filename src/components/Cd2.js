import React from "react";
import data from "../data/cds.json";

export default function Cd2() {
  return (
    <div>
      <h2>
        {data.cd[1].title}
      </h2>
      <h3>
        {data.cd[1].artist}
      </h3>
      <h4>
        {data.cd[1].year}
      </h4>
      <img src={data.cd[1].img}></img>
    </div>
  );
}
