import React from 'react';

const SideBarItem = ({name, active, handleClick}) => {
   return (
      <button className={active ? "sidebar-item active": "sidebar-item"} onClick={handleClick}>{name}</button>
   )
}

export default SideBarItem;
