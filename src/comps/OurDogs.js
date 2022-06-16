import React, { Component } from "react";
import Card from "./Card";
import "../Css/Card.css";
import dogs from "../Json/Data.json"
class OurDogs extends Component {
  constructor(props) {
    super(props);
    this.myDivToFocus = React.createRef()

    this.state = {
     arr:dogs,
     isEdit:false,
     isOpen:false,
    picture:"https://i.ibb.co/b510nXH/32-115-515x340.jpg"
      };
  }

 


  clickHandlerView = e => {
    this.setState({picture: e.img});
    this.setState({ isOpen: !this.state.isOpen});
  
  }


  render() {
    let card = this.state.arr.map(card => {
      return (
        //חילוק הקארד
        <Card
          key={card.id}
          title={card.title}
          gender={card.gender}
          age={card.age}
          img={card.img}
          clickHandlerView={e=>this.clickHandlerView(e)
          }


        />
      );
    });
    return (
      //דיוו ראשי
      <div className="Dogs container-fluid row">
        {this.state.isEdit ? "" : card}
        {this.state.isOpen && (
           <dialog
           className="dialog "
           open
           onClick={this.clickHandlerView}
           ref={this.myDivToFocus}

         >
           <img
             className="image"
             src={this.state.picture}
             onClick={this.clickHandlerView}
             alt="no image"
           />
         </dialog>
       )}
        
        
      </div>
    );
  }
}

export default OurDogs;