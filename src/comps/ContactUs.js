import React, { Component } from 'react'
import "../Css/ContactUs.css";
import "bootstrap/dist/css/bootstrap.css";
import Maps from "./Maps.js";
import contect from "../Img/contect.png"
import dogs from "../Json/Data.json"
 class ContactUs extends Component {
      constructor(props) {
        super(props);

        this.state={
          isTrue:false,
            firstname:{
            name:"",
            type:"text",
            value:"",
            isError:false,
            },
            lastname:{
            name:"",
            type:"text",
            value:"",
            isError:false,
            },
            tel:{
              name:"",
              type:"tel",
              value:"",
              isError:false,
              }, 
            email:{
            name:"",
            type:"email",
            value:"",
            isError:false,
            },
            select:{
              name:"",
              type:"select",
              value:"",
              isError:false,
              },
              text:{
                name:"",
                type:"text",
                value:"",
                isError:false,
                },
                images:"",
                arr:dogs
            }
            this.checkLetters = this.checkLetters.bind(this);
            this.onSubmitHandler = this.onSubmitHandler.bind(this);
            this.onChangeImage = this.onChangeImage.bind(this);

    }





    onSubmitHandler=(e)=> {
      e.preventDefault();

              let tempArr = JSON.parse(JSON.stringify(this.state));
//check name
let nameValid= true;
 let string = tempArr.firstname.value;
        let special_characters = ['$','%','^','&','*','(',')'];
        let string_array = tempArr.firstname.value.split('');
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
        
       


      //check last name
let lastValid= true;
 let stringlast = tempArr.lastname.value;
 
        let string_array2 = tempArr.firstname.value.split('');

        if(stringlast === "")
        lastValid=false;
        // Upper case check
        else if(stringlast[0] === stringlast[0].toUpperCase()) 
          lastValid=false;
        // No numbers check 
        else if(stringlast.match(/\d/)) 
                 lastValid=false;
        // Special Characters
        else if(string_array2.find(item => special_characters.includes(item))) 
                     lastValid=false;
        
//check email
let emailValid=false;
let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[com,co.il]{3,}))$/;
    if ( re.test(tempArr.email.value) )  
      emailValid=true;                
   
//check tel
let telValid=false;
let te = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if ( te.test(tempArr.tel.value) )  
    telValid=true;      

//check select
    let selectValid=false;
    if(this.refs.select.value !== ""){
    selectValid=true; 
this.onChangeImage(this.refs.select.value);

    }
    

 //change color   
if(nameValid === false ){
  this.refs.name.value=null;
  this.refs.name.style.setProperty("border-color", "red");
}
else
  this.refs.name.style.setProperty("border-color", "white");

if(lastValid === false ){
  this.refs.last.value=null;
  this.refs.last.style.setProperty("border-color", "red");
}
else
  this.refs.last.style.setProperty("border-color", "white");

  if(telValid === false ){
    this.refs.tel.value=null;
    this.refs.tel.style.setProperty("border-color", "red");
  }
  else
    this.refs.tel.style.setProperty("border-color", "white");

  if(emailValid === false ){
    this.refs.email.value=null;
    this.refs.email.style.setProperty("border-color", "red");
  }
  else
    this.refs.email.style.setProperty("border-color", "white");

    if(selectValid === false ){
      this.refs.select.value=null;
      this.refs.select.style.setProperty("border-color", "red");
    }
    else
      this.refs.select.style.setProperty("border-color", "white");

 if(selectValid ===true && telValid ===true && emailValid ===true && lastValid ===true && nameValid===true)
 this.setState({isTrue: true});

    }
    checkLetters=(e)=>{
        e.preventDefault();

           this.setState({
            firstname:{
                ...this.state.firstname,
                name: this.refs.name.value,
                value: this.refs.name.value,
            },
             lastname:{
                ...this.state.lastname,
                name: this.refs.last.value,
                value: this.refs.last.value,
            },
            tel:{
              ...this.state.tel,
              name: this.refs.tel.value,
              value: this.refs.tel.value,
          },
             email:{
                ...this.state.email,
                name: this.refs.email.value,
                value: this.refs.email.value,
            },
            select:{
              ...this.state.select,
              name: this.refs.select.value,
              value: this.refs.select.value,
          },
          text:{
            ...this.state.text,
            name: this.refs.text.value,
            value: this.refs.text.value,
        }
        });   
    }
    onChangeImage=(e)=>{
      if(e!==""){
      const info = this.state.arr.filter(i=>i.title===e);
      this.refs.option.style.setProperty("display", "inline-block");
      this.refs.textbox.style.setProperty("margin-top", "0px");
      this.setState({images:info[0].img});
      
      }
    else{
      this.refs.option.style.setProperty("display", "none");
      this.refs.textbox.style.setProperty("margin-top", "130px");


    }
     }
  

    render() {
     
        return (
       
          <div className="container-fluid row d-flex justify-content-between bd-highlight" style={{height:"50em"}}> 
  <div className="p-2 bd-highlight col-md-6 text-center ">
  <div className="texts" style={{fontFamily:'Comfortaa, cursive'}}>
<p style={{fontSize:"22px"}}><b>Thank you for your interest in Animal SpcaDogs<br/> Feel free to call for information or leave
 <br/> Information and we will get back to you <br/>Please complete the form below if you would like us <br/> to e-mail you information on adoption
<br/>or any other questions you may have</b></p>
<p><b>Location:</b> 200 Centre Street, New York, NY 10013, United States</p>
<p><b>Hours:</b> 12-7pm, Tuesdays-Sundays, Closed Mondays</p>
<p><b>Phone:</b> 212.274.8511 or 212.274.8542</p>
<p><b>Email:</b> info@spcadogs.co.il</p>
          </div>  
            <Maps className="map"/>    </div>
          {this.state.isTrue ? (
            <div style={{fontFamily:'Comfortaa, cursive',fontSize:"20px",marginTop:"15%",textAlign:"center",paddingRight:"200px"}}>
   <img className="image" src={contect} alt="" width="150"/><br/>
              <b>The information was successfully sent,<br/>We will get back to you as soon as possible!</b></div>) :(
              <div className="p-2 bd-highlight col-md-6 text-center">
            <div className="ContactUs" style={{fontFamily:'Comfortaa, cursive'}}>            
                <form onSubmit={this.onSubmitHandler} ref={x=>this.myform=x}>
        <p><b>*First Name:</b></p>
        <input className="names" type="text" name="name" ref="name" onChange={e=>this.checkLetters(e)}/>
               <p><b>*Last Name:</b></p>
        <input type="text" name="last" ref="last" onChange={e=>this.checkLetters(e)}/>
        <p><b>*Phone Number:</b></p>
        <input className="tel" type="tel" name="tel" ref="tel" onChange={e=>this.checkLetters(e)} />
               <p><b>*Email:</b></p>
        <input type="email" name="email" ref="email" onChange={e=>this.checkLetters(e)}/><br/>
               <label><b>*Dog Name:</b> <br/><br/>
        <select ref="select" onChange={e=>this.onChangeImage(this.refs.select.value)}>
   <option value="">--Please choose an option--</option>
  <option value="Boni">Boni</option>
  <option value="Nela" >Nela</option>
  <option value="Ben" >Ben</option>
  <option value="Molo" >Molo</option>
  <option value="Max" >Max</option>
  <option value="Chuck" >Chuck</option>
  <option value="Nina" >Nina</option>
  <option value="San" >San</option>
  <option value="Simba" >Simba</option>
  <option value="San" >San</option>
  <option value="Sky" >Sky</option>
  <option value="Roty" >Roty</option>
  <option value="Mor" >Mor</option>
  <option value="Rexy" >Rexy</option>
  <option value="Luna" >Luna</option>
  <option value="Ziggy" >Ziggy</option>
  <option value="Shiba" >Shiba</option>
  <option value="Gucci" >Gucci</option>
  <option value="Gingi" >Gingi</option>
  <option value="Dor" >Dor</option>
  <option value="Kiki" >Kiki</option>

</select></label><br/><br/>
<div style={{display:"none"}} ref="option"><img src={this.state.images} width="230" height="130" /></div>

        <p style={{marginTop:"130px"}} ref="textbox"><b>Tell us about yourself:</b></p>
        <textarea  name="textarea" row="10" col="163" style={{width:"300px",height:"50px"}} ref="text" onChange={e=>this.checkLetters(e)}></textarea ><br/>
<button className="btn1" style={{marginBottom:"2%"}}>Sumbit</button>
      </form>
          </div></div>)}</div>
        )
    }
}

export default ContactUs;