import React from 'react';
import Sidebarbrand from './sidebarbrand';
import Sidebaritem from './sidebaritem';

export default (prop) => {
  React.useEffect(()=>{},[]);
  return (
    <aside className="main-sidebar elevation-2 text-white "style={{  
  backgroundColor:'#2c387e' ,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}} >
        <Sidebarbrand />
        <Sidebaritem />
        </aside>
  );
}

