import React from "react";
import "../Css/Store.css";


 function Products (props){
      const array = props.product;
     

      const listItems = array.map((p,i) =>{

     if(props.type ==="Delete" && Object.prototype.toString.call(p) === "[object Object]"){
            return(
      <div className="row2 col-4" key={i}>
      <div className="name">{p.name}</div>
      <div className="ingredients">ingredients: {p.ingredients}    </div>
      <div className="img container"><img src={p.images} width="100"/></div>
      <div className="info">{p.info}</div>
      <div className="price">price: {p.price}</div>
       <div className="quantity" style={{display:props.stl}}>Quantity: {p.quantity}</div>
<div className="btns">
            <button className="btn1" onClick={() => props.clickHandlerCountAdd2(p)}>{"Add"}</button>
            <button className="btn1" onClick={() => props.clickHandlerCountAdd(p)}>{props.type}</button>
            <button className="btn1" onClick={() => props.clickHandlerView(p)}>View</button></div></div>
    )}
            else if(props.type ==="Add"){
                  return(
                        <div className="row2 col-md-4" key={i}>
                        <div className="name">{p.name}</div>
                        <div className="ingredients">ingredients: {p.ingredients}    </div>
                        <div className="img container"><img src={p.images} width="100"/></div>
                        <div className="info">{p.info}</div>
                        <div className="price">price: {p.price}</div>
                         <div className="sum" style={{display:props.stl}}>{p.quantity}</div>
                  <div className="btns">
                              <button className="btn1" onClick={() => props.clickHandlerCountAdd(p)}>{props.type}</button>
                              <button className="btn1" onClick={() => props.clickHandlerView(p)}>View</button></div></div>
                              )    
            }
            else if(props.type === "Print" && Object.prototype.toString.call(p) === "[object Object]"){
                  return(
                        <div className="row2" key={i}>
                        <div className="name">{p.name}</div>
                        <div className="price">price: {p.price}</div>
                         <div className="sum">{p.quantity}</div>
                         </div>
                              )  
            }
              
            
      })
      return (     
            <div className="Store container-fluid row">{listItems}</div>)
 
 

 

 
 

   
  
  
}

export default Products;