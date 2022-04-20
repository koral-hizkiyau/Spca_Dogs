import React, { Component } from "react";
import remove from "../Single/remove";
import Products from "./Products";
import Count from "../Single/Count";
import ReactDOM from 'react-dom';
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";
import Sum from "../Single/Sum"
import Delivery from "./Delivery";
import CreditCards from "../comps/CreditCards";
import Print2 from "./Print2";
import Deliver from "../Single/Deliver";
import Payments from "../Single/Payments";
import {AwesomeButtonProgress,AwesomeButtonStyles} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import "../Css/Store.css";

class Pay extends Component {
  constructor(props) {
    super(props);
    this.myDivToFocus = React.createRef()
    this.noneinline = {display: 'none'}
    this.state = {
      isLoad:false,
      isOpen:false,
      picture:"https://i.ibb.co/b510nXH/32-115-515x340.jpg",
        data: remove.getDataBase(),
        isflag1:false,
        isflag2: true,
        isflag3:false

        
    };
  }
componentWillMount(){
  if(remove.getDataBase()!==null){
    this.setState({isLoad:!this.state.isLoad})
  }
 
}

clickHandlerCountAdd2=(product)=>{
  let result=Count.getDataBase();
  result++;
  Count.saveDataBase(result);
  this.setState({result:result});   

  if(remove.getDataBase()!==null){
    let products=remove.getDataBase();
    console.log(products);
    
    const list = Object.keys(products).map(i =>{
      if(products[i].id===product.id){
        products[i].quantity++;
        
       return products[i];
      }
      else{
        return products[i];
      }
    });
  
    console.log(list);

    remove.saveDataBase(list)
  }
  else{
    remove.saveDataBase({product})

}
const app = (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));


}


onChangeBills=()=>{
let data = remove.getDataBase();
let sum=0;
Object.keys(data).map(i=>{
if(data[i].quantity==1 && Object.prototype.toString.call(data[i]) == "[object Object]"){
sum=sum+parseFloat(data[i].price);
}
else if (Object.prototype.toString.call(data[i]) == "[object Object]"){
sum=sum+(Number(data[i].quantity)*parseFloat(data[i].price));
}
})
Sum.saveDataBase(sum);
return sum;


}



clickHandlerCountAdd=(product)=>{
  let counts=Count.getDataBase();
  let products=remove.getDataBase();
  const result = products.filter(list =>
    { if(list.id  !== product.id)
    return product.id;
     if(list.id  === product.id && product.quantity>1) {
      product.quantity--;
    return product.id;
    }
   });
  remove.saveDataBase(result);



  counts--;
  Count.saveDataBase(counts);

  const app = (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  
  ReactDOM.render(app, document.getElementById("root"));
  
  
}
clickHandlerView = e => {
    this.setState({picture: e.images});
    this.setState({ isOpen: !this.state.isOpen});
  
  }


onClickPayment=()=>{


this.setState({isflag1: !this.state.isflag1})


}

onClickPaymentprev=()=>{

  this.setState({isflag1:!this.state.isflag1})
}
onclickCredit=()=>{
  const delivers=Deliver.getDataBase();
  if(Deliver.getDataBase()!==null)  
  this.setState({isflag2:!this.state.isflag2})

}
onclickCredit2=()=>{
  if(Payments.getDataBase()!==null){
    this.refs.btns.style.setProperty("display", "none");
  this.setState({isflag3:!this.state.isflag3})
  }


}
onClickDeleteAll=()=>{
  remove.saveDataBase(0);
  Count.saveDataBase(0);
  const app = (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  
  ReactDOM.render(app, document.getElementById("root"));
  
}


render() {

   
  return (  
 <div style={{ position: "relative",
  minHeight: "100vh"}}>
{this.state.isLoad && Count.getDataBase() ? (
<div>
  {this.state.isflag1 ? (
    <div>
      {this.state.isflag2 ? (
    <div><button className="btnPay" ref="btns" style={{marginTop:"1%"}} onClick={this.onClickPaymentprev}>Prev</button><Delivery/> <button className="btnPay" ref="btns" 
     onClick={this.onclickCredit}>Credit Card</button></div>
      ):(
        <div>
          {this.state.isflag3 ? (
          <Print2/>
          ):(
        <div><button className="btnPay" ref="btns" style={{marginTop:"1%"}}  onClick={this.onclickCredit}>Prev</button><CreditCards/><button className="btnPay" ref="btns" onClick={this.onclickCredit2}>Send</button></div>
          )}</div>
      
        )}</div>
 
 
 ):( <div className="pro" ref="pro" >
   <button className="btnDelAll" onClick={this.onClickDeleteAll}>Empty Basket</button>
 <Products product={remove.getDataBase()} type={"Delete"} clickHandlerCountAdd2={this.clickHandlerCountAdd2} clickHandlerCountAdd={this.clickHandlerCountAdd} clickHandlerView={this.clickHandlerView}/>
<p className="total">The total price with shipping: {this.onChangeBills()}$ </p>
<button className="btnPay" onClick={this.onClickPayment}>Payment</button></div>

)}</div>
    ): (<div>
       {Count.getDataBase() ? ("dsd"):(    
       <div className="empty" style={{fontFamily:'Comfortaa, cursive'}}>The cart is empty<br/>Go shopping -->
        
    <AwesomeButtonProgress
      size='medium'
      type="primary"
      cssModule={AwesomeButtonStyles}
      href="./Store"
      action='clicked'    
    >
      Store
    </AwesomeButtonProgress>
  </div>
    )}</div>)}




{this.state.isOpen && (
  <dialog
  className="dialog"
  open
  onClick={this.clickHandlerView}
  ref={this.myDivToFocus}
>
  <img
    className="image"
    style={{width:300}}
    src={this.state.picture}
    onClick={this.clickHandlerView}
    alt="no image"
  />
</dialog>
)}</div>  
);
}
}

export default Pay;

