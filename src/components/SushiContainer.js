import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, onSushiClick }) {
  const [sushiIndex, setSushiIndex] = useState(0)

  const sushi = sushiList
    .slice(sushiIndex, sushiIndex + 4)
    .map(sushi => 
    (   <Sushi key={sushi.id} sushi={sushi} onSushiClick={onSushiClick} />)
    )

  function handleMoreSushi() {
    setSushiIndex(sushiIndex => (sushiIndex < sushiList.length - 4) ? sushiIndex + 4 : 0)
  }

  return (
    <div className="belt">
      {sushi}
      <MoreButton onMoreSushi={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
