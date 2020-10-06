import React from 'react';
import MapComponent1 from './MapComponent1'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component{ 
 
 state = {
 
 }

 
  render() {
  
  return(
      <div className="App">
        <h1 ><div className="App-title">Migraciones en Asturias 1996-2019</div></h1>
    <MapComponent1/>
    
  </div>
  ); 
  }
}
export default App
;
