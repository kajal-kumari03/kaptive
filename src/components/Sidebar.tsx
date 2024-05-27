import React from 'react';
import './Sidebar.css'

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className='h1'>PLSE</h1>
      </div>
      <ul className="sidebar-menu">
        <li className='charts'><a href="#charts">Charts</a></li>
        <li><a href="#tables">Tables</a></li>
        <li><a href="#reports">Reports</a></li>
        <li><a href="#forecast">Forecast</a></li>
      </ul>
      <div className="user-profile">
      
        <button className='logout' style={{background:'rgb(159, 156, 251)'}}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
