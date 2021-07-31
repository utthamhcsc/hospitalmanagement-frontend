import React from 'react';
import Sidebarbrand from './sidebarbrand';
import Sidebaritem from './sidebaritem';

export default (prop) => {
  React.useEffect(()=>{},[]);
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-3"style={{  
  backgroundColor:'#2c387e' ,
 // backgroundColor:'#00796B'
}} >
        <Sidebarbrand />
        <Sidebaritem />
        </aside>
  );
}

