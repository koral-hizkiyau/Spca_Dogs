import React from "react";

const ListPrint = props => {
  return (
      <div>
      <div className="name">{props.name}</div>
      <div className="price">{props.price}</div>
      <div className="quantity">{props.quantity}</div>
      </div>
  );
};

export default ListPrint;
