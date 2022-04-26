import React from "react";

const Card = props => {
  return (
    <div className="row1 col-md-4">
      <div className="id">{props.key}</div>
      <div className="title">{props.title}</div>
      <div className="gender">{props.gender}</div>
      <div className="age">{props.age}</div>
<div className="img container"><img src={props.img} width="200" alt="img"/></div>
        <button  className="btn2" onClick={() => props.clickHandlerView(props)}>
          View
        </button>

    </div>
  );
};

export default Card;
