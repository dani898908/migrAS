import React from "react";
import { Marker, Popup } from "react-leaflet";
import Iframe from 'react-iframe';
import * as muniData from "./municipalities.json";




export default function Pop() {

  const [activeMuni,setActiveMuni]= React.useState(null);

  return ( <div> 
   
    {muniData.features.map(muni =>
    <Marker
     key={muni.properties.url}
     position={[
       muni.geometry.coordinates[1],
       muni.geometry.coordinates[0]
     ]}


      onClick={() => {
        setActiveMuni(muni);

      }}

     />

     )}
     {activeMuni && (
       <Popup
       position={[
        activeMuni.geometry.coordinates[1],
        activeMuni.geometry.coordinates[0]
      ]}
      onClose={() =>{
        setActiveMuni(null);

      }}
       >
         <div className="center">
         <h1 className= "infoHeader" >Municipio : {activeMuni.properties.nameunit}</h1>
       

         <Iframe url= {"https://www.ine.es/jaxiT3/GraficoJsonServlet.htm?w_grafica=1&t=2886&ratio=0.9&nocab=1&btnWidgetGrafico.x=19&btnWidgetGrafico.y=19&rows=28505&columns=28506&columns=p_per&columns=p_oper&oper=22&cri28505="+activeMuni.properties.url+"&cri28506=138939&periodo=28~2019&periodo=28~2018&periodo=28~2017&periodo=28~2016&periodo=28~2015&periodo=28~2014&periodo=28~2013&periodo=28~2012&periodo=28~2011&periodo=28~2010&periodo=28~2009&periodo=28~2008&periodo=28~2007&periodo=28~2006&periodo=28~2005&periodo=28~2004&periodo=28~2003&periodo=28~2002&periodo=28~2001&periodo=28~2000&periodo=28~1999&periodo=28~1998&periodo=28~1997&periodo=28~1996&columnas_grafico=per&ejeHorizontal=per&tipoGrafico=lineas&L=0&p_widgetFormGrafico=1&nult=&w_legend=false&w_contorno_col=89BEBA&w_titulo=true&w_ancho_widget=574px&w_alto_widget=291px%27#!tabs-grafico'"}

        width="400px"
        height="400px"
        id="myId"
        className="myClassname"
        position="relative"/>
         </div>
        </Popup>

     )}

</div>
    
  );
}
