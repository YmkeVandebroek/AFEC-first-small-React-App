import React from "react";
import data from "../data/cds.json";

export default function Cd6() {
  return (
    <div>
      <h2>
        {data.cd[5].title}
      </h2>
      <h3>
        {data.cd[5].artist}
      </h3>
      <h4>
        {data.cd[5].year}
      </h4>
      <img src={data.cd[5].img}></img>
    </div>
  );
}
