import React from 'react';
import GeojsonLayer from './Geojson';
import {Map, TileLayer } from 'react-leaflet';
import Pop from './Nuevo';
import Collapse from './Collapse'


export default class MapComponent1 extends React.Component {
    
   state = {
    lat: 40.46751056468401,
    lng: -3.80185427963720,
    zoom: 18,
    maxZoom: 20,
   color:"#4BC732",
   
   geojsonvisible: true,
  };
  onGeojsonToggle = (e) => { 
    this.setState({
      geojsonvisible: e.currentTarget.checked

    });
  }
  
 
  colorChange=(event)=>{
    this.setState({color: event.target.value})
  }
  render(){
        return (
<div>
            <Map  ref={Map => this.map = Map} center={[43.2159, -5.5140]} zoom={9}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
             
            {this.state.geojsonvisible && 
           <GeojsonLayer url="Pop.json"  />
            }
            
            <Pop/>
            { !this.state.visibility &&  
              <Collapse  onChange={this.geojsonvisible} /> 
              }
           
           
            </Map>
           
            </div>
        )

    }
  
        
}
