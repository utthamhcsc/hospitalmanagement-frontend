import React from 'react';
import Sidebarbrand from './sidebarbrand';
import Sidebaritem from './sidebaritem';

export default (prop) => {
  React.useEffect(()=>{},[]);
  return (
    <aside className="main-sidebar text-white "style={{  
  backgroundColor:'#2c387e' ,
 
}} >
        <Sidebarbrand />
        <Sidebaritem />
        </aside>
  );
}

