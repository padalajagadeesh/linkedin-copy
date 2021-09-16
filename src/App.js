import logo from './logo.svg';
import React from "react";
import './App.css';
import {useSelector} from "react-redux"; 
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Login from './Login';
import Rightside from './Rightside';
function App() {
  return (
         <div className="app">
         <Header/>
      
         
       <div className="app-body">
         <Sidebar/>
         <Main/>
         <div> 
         <Rightside/>
        </div>
        </div>
    </div>
  );
}

export default App;
