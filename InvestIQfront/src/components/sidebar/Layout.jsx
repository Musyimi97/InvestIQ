import React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

function Layout() {
  const { collapse, isCollapsed } = useProSidebar();

  const handleCollapse = () => {
    collapse();
  };

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar collapsed={isCollapsed}>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={handleCollapse}>Collapse</button>
        <h1>Main Content</h1>
      </main>
    </div>
  );
}

export default Layout;
