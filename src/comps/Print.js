import React, { Component } from "react";
import remove from "../Single/remove";
import Sum from "../Single/Sum";
import Table from 'react-bootstrap/Table';

class Print extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: remove.getDataBase()
    }
  }

  render() {
    

    const filters = this.state.arr.filter(list=> Object.prototype.toString.call(list) === "[object Object]");


    const tableList = filters.map((list,i) => {
    
     
    return (
          <tbody style={{textAlign:"center",fontFamily:'Comfortaa, cursive'}}>
            <tr>
          <td>{i+1}</td>
          <td>{list.name}</td>
          <td>{list.price}</td>
          <td>{list.quantity}</td>
          </tr>
          </tbody>
          )})
          return(
            <div>
              <div style={{fontSize:"20px",marginBottom:"3%",textAlign:"center",marginTop:"5%",fontFamily:'Comfortaa, cursive'}}><b>Thank you very much for your purchase we would hope to see you again!</b></div>
          <div style={{fontSize:"30px",textAlign:"center",fontFamily:'Comfortaa, cursive'}}><b>Receipt</b></div>
           <Table striped bordered hover style={{width:"100%",marginTop:"5%",fontFamily:'Comfortaa, cursive'}}>
            <thead style={{textAlign:"center"}}>
            <tr>
            <th>#</th>
              <th>Name:</th>
              <th>Price:</th>
              <th> quantity:</th>
              </tr>
            </thead>
           {tableList}
           <tbody>
             <tr>
             <td colSpan="2" style={{textAlign:"center"}}><b>The total price with shipping:</b></td>
           <td colSpan="2" style={{textAlign:"center"}}><b>{Sum.getDataBase()}$</b></td>
           </tr>
           </tbody>
              </Table>
              </div>

            
          
          )
}
}
export default Print;