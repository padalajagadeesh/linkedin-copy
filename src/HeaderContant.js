import React from 'react'
import  './HeaderContant.css'
import {Avatar}  from "@material-ui/core"
function HeaderContant({ Avataor,Icon,title}) {
    return (
        <div className="headercontant">
            {Icon && <Icon className="headercontant-icons"/>}
         
           <h2 className="hadercontant-title">{title}</h2>
        </div>
    )
}

export default HeaderContant
