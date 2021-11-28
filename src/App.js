import React from 'react';
import './App.css';
import Slider from './Slider';
import SideBarItem from './SideBarItem.js';
function App() {
  return (
    <div className="container">
      <div className="main-image">
        
      </div>
      <div className="sidebar">
        <SideBarItem />
      </div>
      <Slider />
    </div>
  );
}

export default App;
