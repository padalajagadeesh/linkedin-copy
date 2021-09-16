import React from 'react'
 import   './Header.css';
 import HeaderContant from './HeaderContant'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Avatar}  from "@material-ui/core"
function Header() {
    return (
        <div className="header">
          
         <div className="header-left" >
          <img src= "https://static.vecteezy.com/system/resources/previews/000/611/672/original/vector-luxury-letter-j-emblem-wings-logo-design-concept-template.jpg" alt=""/> 
          <div className="header-search">
              <SearchIcon/>
              <input type="text"/>
          </div> 
   <div className="header-right">
       <HeaderContant Icon={HomeIcon}title="Home"/>
       <HeaderContant  Icon={SupervisorAccountIcon}title="My Networks"/>
       <HeaderContant  Icon={ WorkIcon }title="jobs"/>
       <HeaderContant  Icon={ MessageIcon}title="message"/>
       <HeaderContant  Icon={ NotificationsIcon} title="notification"/>
       <HeaderContant  Icon={Avatar}  title="me"/>
   </div>
</div>
</div>
    )
}

export default Header
