import React from "react";
import hoc from "./hoc";

function HOCDisplay(props) {
  const pokelist = props.data.map((shoe, index) => {
    return (
      <div key={index}>
        <img src={shoe.image} alt="pokemon" />
        <h1>{shoe.name}</h1>
        <div>{`$${shoe.price}`}</div>
        <br />
        <br />
      </div>
    );
  });
  return <div>{pokelist}</div>;
}

export default hoc(HOCDisplay);
