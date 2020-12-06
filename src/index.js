import React from "react";
import { render } from "react-dom";
import CdList from "./components/CdList";
import data from "./data/cds.json";

render(
  <CdList cds={data} />, /*Ik snap deze regel niet...*/
  document.getElementById("root")
);



console.log(data.cd[0].artist);




/*Ik importeer de data in alle bestanden...*/
