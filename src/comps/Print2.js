import Print from "./Print"
import ReactToPrint from 'react-to-print';
import React, { Component } from "react";




class Print2 extends Component {

    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.componentRef}
          />
          <Print ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }

  export default Print2;