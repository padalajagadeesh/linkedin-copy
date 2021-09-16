 import React from 'react'
 import './MainOptions.css';
 function MainOptions({Icon,titile,color}) {
     return (
        <div className="mainoption-top">
            <Icon style={{color:color}}/>
            <h3>{titile}</h3>
        </div>
     )
 }
 
 export default MainOptions;
 