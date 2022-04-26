import React, { Component } from "react";
import "../Css/CreditCard.css"
import "bootstrap/dist/css/bootstrap.css";
import Deliver from "../Single/Deliver";


class Delivery extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      address: '',
      name2: '',
      last: '',
      city: '',
      postalcode: '',
      state: ''

    }
    this.checkCard = this.checkCard.bind(this);
    this.onCheckDelivery = this.onCheckDelivery.bind(this);

    


  }

  componentWillMount() {
    let deliverys =Deliver.getDataBase();
    Deliver.saveDataBase(deliverys);
  
    
  }
  
checkCard=(e)=>{
    const { name, value } = e.target;    
    this.setState({ [name]: value });
  }



onCheckDelivery=(e)=>{
  e.preventDefault();

  let tempArr = JSON.parse(JSON.stringify(this.state));

//check name
let name2Valid= true;
 let string = tempArr.name2;
        let special_characters = ['$','%','^','&','*','(',')'];
        let string_array = tempArr.name2.split('');
        // Upper case check
        if(string === "")
        name2Valid=false;
        else if (string[0] === string[0].toUpperCase()) 
          name2Valid=false;
        // No numbers check
       else if(string.match(/\d/)) 
                 name2Valid=false;
        // Special Characters
       else if(string_array.find(item => special_characters.includes(item))) 
                     name2Valid=false;

                      //change color   
if(name2Valid === false ){
  this.refs.name2.value=null;
  this.refs.name2.style.setProperty("border-color", "red");
}
else
  this.refs.name2.style.setProperty("border-color", "white");


//check last
let lastValid= true;
  string = tempArr.last;
         special_characters = ['$','%','^','&','*','(',')'];
         string_array = tempArr.last.split('');
        // Upper case check
        if(string === "")
        lastValid=false;
        else if (string[0] === string[0].toUpperCase()) 
        lastValid=false;
        // No numbers check
       else if(string.match(/\d/)) 
       lastValid=false;
        // Special Characters
       else if(string_array.find(item => special_characters.includes(item))) 
       lastValid=false;

                      //change color   
if(lastValid === false ){
  this.refs.last.value=null;
  this.refs.last.style.setProperty("border-color", "red");
}
else
  this.refs.last.style.setProperty("border-color", "white");

  //check city
let cityValid= true;
string = tempArr.city;
       special_characters = ['$','%','^','&','*','(',')'];
       string_array = tempArr.city.split('');
      // Upper case check
      if(string === "")
      cityValid=false;
      else if (string[0] === string[0].toUpperCase()) 
      cityValid=false;
      // No numbers check
     else if(string.match(/\d/)) 
     cityValid=false;
      // Special Characters
     else if(string_array.find(item => special_characters.includes(item))) 
     cityValid=false;

                    //change color   
if(cityValid === false ){
this.refs.city.value=null;
this.refs.city.style.setProperty("border-color", "red");
}
else
this.refs.city.style.setProperty("border-color", "white");

  //check address
  let addressValid= true;
  string = tempArr.address;
         special_characters = ['$','%','^','&','*','(',')'];
         string_array = tempArr.address.split('');
        // Upper case check
        if(string === "")
        addressValid=false;
        else if (string[0] === string[0].toUpperCase()) 
        addressValid=false;
        // No numbers check
       else if(string.match(/\d/)) 
       addressValid=false;
        // Special Characters
       else if(string_array.find(item => special_characters.includes(item))) 
       addressValid=false;
  
                      //change color   
  if(addressValid === false ){
  this.refs.address.value=null;
  this.refs.address.style.setProperty("border-color", "red");
  }
  else
  this.refs.address.style.setProperty("border-color", "white");
  

    //check state
    let stateValid= true;
    string = tempArr.state;
           special_characters = ['$','%','^','&','*','(',')'];
           string_array = tempArr.state.split('');
          // Upper case check
          if(string === "")
          stateValid=false;
          else if (string[0] === string[0].toUpperCase()) 
          stateValid=false;
          // No numbers check
         else if(string.match(/\d/)) 
         stateValid=false;
          // Special Characters
         else if(string_array.find(item => special_characters.includes(item))) 
         stateValid=false;
    
    //change color   
    if(stateValid === false ){
    this.refs.state.value=null;
    this.refs.state.style.setProperty("border-color", "red");
    }
    else
    this.refs.state.style.setProperty("border-color", "white");
    
    

    //check zip code
    let postalcodeValid= false;
    string = tempArr.postalcode;
       
         var pattern = /^[0-9]{5}$/;
         if(pattern.test(string))
         postalcodeValid=true;
          
    
        //change color   
    if(postalcodeValid === false ){
    this.refs.postalcode.value=null;
    this.refs.postalcode.style.setProperty("border-color", "red");
    }
    else
    this.refs.postalcode.style.setProperty("border-color", "white");
    





  if(name2Valid===true && lastValid===true && cityValid===true && addressValid===true && stateValid===true &&  postalcodeValid===true){
    Deliver.saveDataBase(tempArr);
    
   }
   else{
    Deliver.saveDataBase(null);

   }



}





  render() {
   
    return(
      
    
      <div className="p-2 bd-highlight col-md-12 text-center">
        <div><b style={{fontSize:"25px",fontFamily:'Comfortaa, cursive'}}>Delivery:</b><br/>Please fill in your information
        </div>
      <div className="Credit" style={{fontFamily:'Comfortaa, cursive'}}>
       <form onSubmit={this.onCheckDelivery} ref={x=>this.myform=x}>
           <p>*Name:</p>
           <input className="names" type="text" name="name2" ref="name2" value={this.state.name2} onChange={e=>this.checkCard(e)}/>
           <p>*Last:</p>
           <input className="last" type="text" name="last" ref="last" value={this.state.last} onChange={e=>this.checkCard(e)}/>
           <p>*City:</p>
           <input className="city" type="text" name="city" ref="city" value={this.state.city}  onChange={e=>this.checkCard(e)}/>
           <p>*Street Address:</p>
           <input className="address" type="text" name="address" ref="address" value={this.state.address} onChange={e=>this.checkCard(e)}/>
           <p>*State:</p>
           <input className="state" type="text" name="state" ref="state" value={this.state.state}  onChange={e=>this.checkCard(e)}/>
           <p>*Zip Code:</p>
           <input className="postalcode" type="text" maxLength="5" name="postalcode" ref="postalcode" value={this.state.postalcode} onChange={e=>this.checkCard(e)}/>
           <button className="btnCard" style={{marginTop:"3%",marginBottom:"3%"}} type="true">Checking information</button>
          </form></div>
        
          </div>
                              
 
        
    )

 
  }
}

export default Delivery;