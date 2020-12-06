import React from "react";

import Cd1 from "./Cd1";
import Cd2 from "./Cd2";
import Cd3 from "./Cd3";
import Cd4 from "./Cd4";
import Cd5 from "./Cd5";
import Cd6 from "./Cd6";

import data from "../data/cds.json";
/*Dit is niet helemaal de juiste manier denk ik...maar het werkt wel*/

function CdList() {
  return (
      <div>
        <h1>Some of my favorite cd's</h1>
        {Cd1()}
        {Cd2()}
        {Cd3()}
        {Cd4()}
        {Cd5()}
        {Cd6()}
      </div>
  );
}

export default CdList;
