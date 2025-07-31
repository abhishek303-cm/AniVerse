import React, { useState } from 'react';
import './Sidebar.css';
import img1 from '../../assets/animelogo.jpeg';

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: 'fa-chart-pie' },
    { icon: 'fa-chart-bar' },
    { icon: 'fa-link' },
    { icon: 'fa-copy' },
    { icon: 'fa-sign-out-alt' },
  ];

  return (
    <div className="sidebar">
      <div className="logo"><img src={img1} alt="" /></div>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`sidebar-icon ${activeIndex === index ? 'active' : ''}`}
          onClick={() => setActiveIndex(index)}
        >
          <i className={`fas ${item.icon}`}></i>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
