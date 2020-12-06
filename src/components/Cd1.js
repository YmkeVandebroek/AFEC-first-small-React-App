import React from "react";
import data from "../data/cds.json";

export default function Cd1() {
  return (
    <div>
      <h2>
        {data.cd[0].title}
      </h2>
      <h3>
        {data.cd[0].artist}
      </h3>
      <h4>
        {data.cd[0].year}
      </h4>
      <img src={data.cd[0].img}></img>
    </div>
  );
}
