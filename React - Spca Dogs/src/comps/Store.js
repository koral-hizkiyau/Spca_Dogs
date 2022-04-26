import React, { Component } from "react";
import SingleTonClass from "../Single/SingleTonClass";
import Count from "../Single/Count";
import remove from "../Single/remove";
import Products from "./Products";
import ProductsStore from "../Json/ProductsStore.json";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home"
import ReactDOM from 'react-dom';

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoad:false,
      isOpen:false,
      picture:"https://i.ibb.co/b510nXH/32-115-515x340.jpg"    };
  }

  componentWillMount() {
    let products =ProductsStore;
    
    SingleTonClass.saveDataBase(products);
    let count=Count.getDataBase();
    if(count===0)
    count=0;
    Count.saveDataBase(count);

  }

  clickHandlerCountAdd=(product)=>{
    let result=Count.getDataBase();
    result++;
    Count.saveDataBase(result);
    this.setState({result:result});   

    if(remove.getDataBase()!==null){
      let products=remove.getDataBase();
      const list = Object.keys(products).map(i =>{
        if(products[i].name===product.name){
         return product.quantity++;

        }
        else{
          return products[i];
        }
      });
      list.push(product)
      remove.saveDataBase(list)
    }
    else{
      remove.saveDataBase([product])

  }


  const app = (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  
  ReactDOM.render(app, document.getElementById("root"));
  
  }

  clickHandlerView = e => {
    console.log(e)
    this.setState({picture: e.images});
    this.setState({ isOpen: !this.state.isOpen});
  
  }

  render() {
  

 return (
      <div>
   
     {this.state.isLoad ? 
        "" : <Products product={SingleTonClass.getDataBase()} stl={"none"} type={"Add"} clickHandlerCountAdd={this.clickHandlerCountAdd} clickHandlerView={this.clickHandlerView}/>}
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
       )}
      </div>
    );
  }
}

export default Store;