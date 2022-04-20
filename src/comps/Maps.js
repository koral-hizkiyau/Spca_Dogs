import React, { Component } from "react";
import { Map, TileLayer, Marker} from "react-leaflet";
import L from "leaflet";
import "../../node_modules/leaflet/dist/leaflet.css"

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class Maps extends Component {
  
    
        state = {
            lat: 40.71906,
           lng:-73.99899,
        zoom:16
        }

  render() {
   
    const position=[this.state.lat,this.state.lng];
   
    return (
 
      <Map  style={{display:"inline-block",width:"50%"}}  ref="map" className="map" zoom={this.state.zoom} center={position} >
        <TileLayer 
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy;<a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        
        />
        <Marker position={position}>
        
        </Marker>
      </Map>
    );
  }
}

export default Maps;