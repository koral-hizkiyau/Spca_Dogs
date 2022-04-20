import React, { Component } from "react";
import "../Css/CreditCard.css"
import "bootstrap/dist/css/bootstrap.css";
import moment from 'moment';
import Payments from "../Single/Payments";
import visa from 'payment-icons/min/flat/visa.svg';
import amex from 'payment-icons/min/flat/amex.svg';
import mastercard from 'payment-icons/min/flat/mastercard.svg';
import diners from 'payment-icons/min/flat/diners.svg';
import security from '../Img/security-code.png';

class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      name: '',
      number: '',
      month: '',
      year: '',
      cvv: ''
     

    }
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.checkCard = this.checkCard.bind(this);

    


  }

  componentWillMount() {
    let payment =null;
    Payments.saveDataBase(payment);
  
    
  }
        onSubmitHandler=(e)=> {
        
          e.preventDefault();
         
let tempArr = JSON.parse(JSON.stringify(this.state));

//check name
let nameValid= true;
 let string = tempArr.name;
        let special_characters = ['$','%','^','&','*','(',')'];
        let string_array = tempArr.name.split('');
        // Upper case check
        if(string === "")
        nameValid=false;
        else if (string[0] === string[0].toUpperCase()) 
          nameValid=false;
        // No numbers check
       else if(string.match(/\d/)) 
                 nameValid=false;
        // Special Characters
       else if(string_array.find(item => special_characters.includes(item))) 
                     nameValid=false;

                      //change color   
if(nameValid === false ){
  this.refs.name.value=null;
  this.refs.name.style.setProperty("border-color", "red");
}
else
  this.refs.name.style.setProperty("border-color", "white");

//check number
let numberValid=false;
let cardNumber = tempArr.number;
var visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
var amrican = /^(?:3[47][0-9]{13})$/;
var mastercard = /^(?:5[1-5][0-9]{14})$/;
var diner = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;

if(cardNumber.match(visa || cardNumber.match(amrican) || cardNumber.match(mastercard)) || cardNumber.match(diner))
         numberValid=true;

         if(numberValid === false ){
          this.refs.cardNumber.value=null;
          this.refs.cardNumber.style.setProperty("border-color", "red");
        }
        else
          this.refs.cardNumber.style.setProperty("border-color", "white");

          
//check month
let mm=tempArr.month;
let mmvalid=false;
var pattern = /^(0[1-9]|1[012])$/;
if(pattern.test(mm))
mmvalid=true;

if(mmvalid === false ){
  this.refs.mm.value=null;
  this.refs.mm.style.setProperty("border-color", "red");
}
else
  this.refs.mm.style.setProperty("border-color", "white");

  //check year
let yy=tempArr.year;
let yyvalid=false;
var pattern = /^(2[0-9]|3[0-9])$/
if(pattern.test(yy))
yyvalid=true;

if(yyvalid === false ){
  this.refs.yy.value=null;
  this.refs.yy.style.setProperty("border-color", "red");
}
else
  this.refs.yy.style.setProperty("border-color", "white");

  if(yyvalid === true && mmvalid === true){
    if(this.refs.mm.value<moment().format('MM') && this.refs.yy.value===moment().format('YY')){
      this.refs.mm.value=null;
      this.refs.mm.style.setProperty("border-color", "red");
    }
    else if(this.refs.mm.value<moment().format('MM') && this.refs.yy.value<moment().format('YY')){
      this.refs.mm.value=null;
      this.refs.mm.style.setProperty("border-color", "red");
    }
  }
    //check cvv
let cvvs=tempArr.cvv;
console.log(cvvs);

let cvvvalid=false;
var pattern = /^[0-9]{3}$/;
if(pattern.test(cvvs))
cvvvalid=true;

if(cvvvalid === false ){
  this.refs.cvv.value=null;
  this.refs.cvv.style.setProperty("border-color", "red");
}
else
  this.refs.cvv.style.setProperty("border-color", "white");

if(yyvalid === true && mmvalid === true && numberValid===true && nameValid===true && cvvvalid===true){
let payment =JSON.parse(JSON.stringify(this.state));
Payments.saveDataBase(payment);
}
    
  }



checkCard=(e)=>{
    const { name, value } = e.target;    
    this.setState({ [name]: value });
  }









  render() {
   
    return(
        <div className="p-2 bd-highlight col-md-12 text-center">
        <div className="Credit" ref="credit">
          <div style={{display:"flex",justifyContent:"space-around",marginTop:"2%",marginBottom:"2%"}}>
        <img src={visa} alt="Logo" width='40'/>
        <img src={amex} alt="Logo" width='40'/>
        <img src={mastercard} alt="Logo" width='40'/>
        <img src={diners} alt="Logo" width='40'/>
        </div>
         <form onSubmit={this.onSubmitHandler} ref={x1=>this.myform2=x1} style={{fontFamily:'Comfortaa, cursive'}}>
             <p><b>Card Holder Name:</b></p>
             <input className="cardName" type="text" name="name" ref="name" value={this.state.name} onChange={e=>this.checkCard(e)}/>
             <p><b>Card Number:</b></p>
             <input className="cardNumber" type="text" name="number" ref="cardNumber" maxLength="16" value={this.state.number} onChange={e=>this.checkCard(e)}/>
             <p><b>Expiry MM/YY:</b></p>
             <input className="mm" type="text" name="month" ref="mm" maxLength="2" style={{width:"50px"}} value={this.state.month} onChange={e=>this.checkCard(e)}/>
             <input className="yy" type="text" name="year" ref="yy" maxLength="2" style={{width:"50px"}} value={this.state.year} onChange={e=>this.checkCard(e)}/>
             <p><b>CVV:</b></p><img src={security} alt="Logo" width='50' style={{marginBottom:"2%"}}/><br/>
             <input className="cvv" type="text" name="cvv" maxLength="3" ref="cvv" value={this.state.cvv} style={{width:"50px",marginBottom:"3%"}} onChange={e=>this.checkCard(e)}/>
             <button className="btnCard" style={{marginBottom:"3%",fontSize:"13px"}}>Checking information</button>
            </form></div>
        </div>
     
      
  
    
   )
 
  }
}

export default CreditCard;


