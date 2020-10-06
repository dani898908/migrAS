import React from 'react';
import mario from './mario.png'
import {Button} from 'reactstrap'

class Collapse extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    visibility: false,
   
    geojsonvisible2: false,
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
    }
    // change code below this line
    
    toggleVisibility(){
    this.setState({
    visibility: !this.state.visibility
    })
    }
     onGeojsonToggle = (e) => {
    
    this.setState({
      geojsonvisible: e.currentTarget.checked
      
  
    });
    
    
  }
 
    // change code above this line
    render() {
    if (this.state.visibility) {
    return (
  
    <div>
         
      
          <div className="geojson-toggle">
            <Button className="mostrar" onClick={this.toggleVisibility}
              value={this.state.visibility} onChange={this.toggleVisibility} 
              > 
             <div className="parrafos"> <p>Esta aplicación nos ofrece las gráficas de migración en los municipios de Asturias</p></div>
             <p class="text-primary">Información proporcionada por el INE</p>
             <div />
            </Button>
          </div>
     
      
           
       
    
  </div>
            
    );
    } else {
    return (
    
       <div><button className="mostrar" onClick={this.toggleVisibility}>
         
         <img width="50px" className="img-fluid"src={mario} alt="logo" />
         
         </button></div>
    
    );
    }
    }
  };
  export default Collapse;