import React from 'react';
import { GeoJSON, FeatureGroup,  } from 'react-leaflet';


 class GeojsonLayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
   
      data:[],
     color:"#d42029"
    };
  
    console.log('constructor')
  }

  myStyle = () => {
    return {
      weight: 2,
      opacity: 2,
      fillOpacity:1,
      color: 'white'
     
    }
  };
  mousemove = (event)=>{
    event.target.setStyle({
      color:"grey",
       fillColor:this.state.color,
     
   });
  }


   onEachContry= ( nameunit, layer)=>{
     const names= nameunit.properties.id;
     //layer.bindPopup(names);


     //layer.options.fillOpacity= Math.random();


     //const colorIn= Math.floor(Math.random() * this.color.length);
     //layer.options.fillColor= this.color[colorIn]

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
   
  

