 import React,{useState}from 'react'
import './Main.css'
 import { Avatar } from '@material-ui/core';
 import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
 import VideocamIcon from '@material-ui/icons/Videocam';
 import EventAvailableIcon from '@material-ui/icons/EventAvailable';
 import AssignmentIcon from '@material-ui/icons/Assignment';
import MainOptions from './MainOptions';
 import Posts from './Posts';
 function Main() {
     const [posts,setPosts]=useState([]);
     return (
         <div className="main">
             <div className="main-inputcontainer">
                 <div className="main-input">
                 <Avatar className="main-icon" />
                 <form> 
                 <button className="main-btn">shre a post</button>
                 </form>
                 </div>
                 <div className="mainoptions"> 
             <MainOptions Icon={PhotoSizeSelectActualIcon} titile='photo' color="skyblue"/>
             <MainOptions Icon={VideocamIcon} titile='video' color="red"/>
             <MainOptions Icon={EventAvailableIcon} titile='Events' color="green"/>
             <MainOptions Icon={AssignmentIcon} titile='Work article' color="lightgreen"/>
             </div>
             <div>
{posts.map((posts)=>{
    <Posts/>
})}


              <Posts name="jagadeesh"content="social " message="this is my sample project  hello evry one i intreducing my new project if u like plz like the symbol"/>
              <Posts name="jagadeesh"content="public " message="this is my sample project  hello evry one i intreducing my new project if u like plz like the symbol"/>
              <Posts name="saikrishna"content="public " message="this is my sample project  hello evry one i intreducing my new project if u like plz like the symbol"/>
              <Posts name="jagadeesh"content="public " message="this is my sample project  hello evry one i intreducing my new project if u like plz like the symbol"/>
              <Posts name="saikrishna"content="public " message="this is my sample project  hello evry one i intreducing my new project if u like plz like the symbol"/>
             <Posts name="jaggu" content="social meadia" message="social meadia is very too much take time please avoid the meadias please"  />
             </div>
             </div>
         </div>
     )
 }
 
 export default Main
 
  

