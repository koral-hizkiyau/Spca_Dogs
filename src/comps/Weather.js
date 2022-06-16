import React, { Component } from 'react'
import "../Css/Home.css"
class Weather extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
            current:[],
            location:[]
        }
      }
      componentWillMount() {

        const axios = require('axios');
        const params = {
          query: 'New York'
        }

        axios.get('http://api.weatherstack.com/current?access_key=84040cb8d856c2b66b2158ba56b182eb',{params})
          .then(response => {
            console.log(response.data);
            
            this.setState({current: response.data.current,location:response.data.location})
          }).catch(error => {

            console.log(error);
          })
         
          
      }


      render(){

 return  ( 
 <div className="weather" style={{display:"inline-block"}}>
       <p>{this.state.current.temperature}{'℃'}{' '}<img src ={this.state.current.weather_icons} alt="wthr img" /></p>

</div>)
        
}
}
export default Weather