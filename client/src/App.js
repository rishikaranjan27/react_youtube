import './App.css';
import {Header} from "./MyComponents/Header";
import {Sidebar} from "./MyComponents/Sidebar";
import {Feed} from "./MyComponents/Feed";
import React, {useState} from "react"


function App() {
  return (
    <div className='app'>
      <Header/>
      <div className='home'>
        <Sidebar/>
        <Feed/> 
      </div>
    </div>

  );
}

export default App;
