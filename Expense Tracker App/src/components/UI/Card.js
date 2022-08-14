import React from "react";
import "./Card.css";




// Card is a wrapper
function Card(props) {
  const classes = "card " + props.className; // anything that is set on a className prop, is added to the custom card css. SO classes holds both styles

  return <div className={classes}>{props.children}</div>; // anything inside the card wrapper is children component
}

export default Card;
