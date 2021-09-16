import { Avatar } from '@material-ui/core';
import React from 'react'
import  './Sidebar.css';


function Sidebar() {
    return (
 <div className="sidebar">
         <div className="sidebar-top">
                <img src="https://www.publicdomainpictures.net/pictures/250000/velka/abstract-background-colors.jpg"  alt=""/>
                <Avatar src=" https://media-exp1.licdn.com/dms/image/C4E03AQF2j3Z9O9fMww/profile-displayphoto-shrink_200_200/0/1627674508171?e=1635984000&v=beta&t=T7vOpxo45UEM9E91bsv860Znl0QH0zj3IUaajkUKOGs "className="sidebar-avatar"/>
                <h1>jagadeeshpadala</h1>
                <h4>jagadeeshpadala789@gmail.com</h4>
         </div> 
         <div className="sidebar-status">
                  <div className="sidebar-startname">
                    <p> views  </p>
                    <p className="sidebar-startno">11,220</p>
                    </div>  
                     <div className="sidebar-startname">
                     <p>  post</p>
                     <p className="sidebar-startno">1,122 </p>
                     </div>
                     </div>   
                     <div className="sidebar-last">
                         <p>Recent</p>
                     </div>
                <div className="sidebar-bottom"> 
                   <p>
                       Groups<br/>
                       Events  <span>+</span><br/>
                       Followed Hashtags  
                    </p>
                </div>
                <div className="sidebar-cover">
                        Discover More 
                </div>
                   
 </div>
        
    )
}

export default Sidebar
