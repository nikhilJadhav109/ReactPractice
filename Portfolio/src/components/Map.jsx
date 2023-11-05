import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [285.0, 343, 0],
        center: [5, 5],
        scale: 1600
      }}
      style={{width:"100%", height:"100%"}}
    >
        
      <Geographies
        geography="/features.json"
        fill="#1F0549"
        stroke="#FFFFFF"
        strokeWidth={1}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

      


      <Annotation
        subject={[-105, -199]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Pune"}
        </text>
      </Annotation>
     
    </ComposableMap>
  );
};

export default Map;