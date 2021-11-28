import React, {useState} from 'react';
import SideBarItem from './SideBarItem.js';
import Slider from './Slider';
import './App.css';

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  }, 
  {
    name: "Contrast",
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  }, 
  {
    name: "Saturation",
    property: 'saturation',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  }, 
  {
    name: "Grayscale",
    property: 'grayscale',
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: "%"
  }, 
  {
    name: "Sepia",
    property: 'sepia',
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: "%"
  }, 
  {
    name: "Hue Rotate",
    property: 'hue-rotate',
    value: 100,
    range: {
      min: 0,
      max: 360
    },
    unit: "deg"
  }, 
  {
    name: "Blur",
    property: 'blur',
    value: 100,
    range: {
      min: 0,
      max: 20
    },
    unit: "px"
  }, 
]

function App() {
  const [options, setOptions]= useState(DEFAULT_OPTIONS);
  const [selectedOptIndex, setSelectedOptIndex] = useState(0);

  const selectedOption = options[selectedOptIndex];

  return (
    <div className="container">
      <div className="main-image">
      </div>
      <div className="sidebar">
        {options.map((option, index) => {
          return <SideBarItem key={option.name} name={option.name} 
          handleClick={() => setSelectedOptIndex(index)}
          active={index === selectedOptIndex}/>
        }
        )}
      </div>
      <Slider />
    </div>
  );
}

export default App;
