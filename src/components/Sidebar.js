import React, { useState } from 'react'; // If using React Router for navigation
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {/* Add your logo or icon here */}
        <span className="sidebar-icon">🗺️</span>
        {!isSidebarCollapsed && <span className="sidebar-title">Map App</span>}
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarCollapsed ? '>' : '<'}
      </div>
    </div>
  );
};

export default Sidebar;
