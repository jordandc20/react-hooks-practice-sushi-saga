import React from "react";

function Sushi({ sushi, onSushiClick }) {
  const { name,img_url,  price, isEaten } = sushi
  
  return (
    <div className="sushi">
      <div className="plate" onClick={() => isEaten === true ? alert('plate is already empty') : onSushiClick(sushi)}>
      {/* <div className="plate" onClick={() =>{ if (!isEaten) { onSushiClick(sushi) }}}> */}

        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
