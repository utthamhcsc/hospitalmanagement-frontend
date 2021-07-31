import React from 'react';
import Sidebarbrand from './sidebarbrand';
import Sidebaritem from './sidebaritem';

export default (prop) => {
  React.useEffect(()=>{},[]);
  return (
    <aside className="main-sidebar skin-purple  sidebar-dark-primary elevation-2 sidebar-no-expand   sidebar-child-indent bg-white">
        <Sidebarbrand />
        <Sidebaritem />
        </aside>
  );
}

