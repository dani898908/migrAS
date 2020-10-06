import React from 'react';
import { GeoJSON, FeatureGroup,  } from 'react-leaflet';


 class GeojsonLayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
   
      data:[],
     color1:"white",
     color:"white"
    };
  
    console.log('constructor')
  }

  myStyle = () => {
    return {
      weight: 0.5,
      opacity: 2,
      fillOpacity: 0.5,
      fillColor: 'red',
  
     
    }
  };
  mousemove = (event)=>{
    event.target.setStyle({
      color:"white",
       fillColor:this.state.color,
     
   });
  }


   onEachContry= ( nameunit, layer)=>{
     const names= nameunit.properties.Nombre;
     const den= nameunit.properties.populationtotalsais_otdensit
     layer.bindPopup("Municipio de"+" "+" "+  names +" "+" "+"densidad Poblacional año 2019: "+""+ "" +den+" "+"hab./km²" );

     layer.on({
       click: this.mousemove,
      
    });
   };
   colorChange=(event)=>{
    this.setState({color: event.target.value})
  }
  render() {
   console.log('render')
   console.info(this.state.data)
    return (
      <div>
      <FeatureGroup>
        {this.state.data.map((f, index) => {
          return <GeoJSON key={index} data={f} style={this.myStyle} onEachFeature={this.onEachContry}>
            
          </GeoJSON>
        })}
      </FeatureGroup>
    
      </div>
    );
    
  }
  componentDidMount() {
    if (this.props.url) {
      this.fetchData(this.props.url);
    }
     
  }
  
  componentWillUnmount() {
    console.log('will unmount');

  }
  fetchData(url) {
    
    console.log('url')
    let request = fetch(url);
 
    request
      .then(r => r.json())
      .then(data => {
        this.setState({
          data: data.features
        });
      }, (error) => {
        console.error(error);
      });
  }
   }
   export default GeojsonLayer;
   
  

