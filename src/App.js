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
    property: 'saturate',
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
    value: 0,
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

  const handleSliderChange = ({target}) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if(index !== selectedOptIndex){
          return option;
        }else{
          return {...option, value: target.value}
        }
      })
    })
  }

  const getImageStyle = () => {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    });

    return {filter: filters.join(' ')}
  }

  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()}>
      </div>
      <div className="sidebar">
        {options.map((option, index) => {
          return <SideBarItem key={option.name} name={option.name} 
          handleClick={() => setSelectedOptIndex(index)}
          active={index === selectedOptIndex}/>
        }
        )}
      </div>
      <Slider 
      min={selectedOption.range.min}
      max={selectedOption.range.max}
      value={selectedOption.value}
      unit={selectedOption.unit}
      handleChange={handleSliderChange}
      />
    </div>
  );
}

export default App;
