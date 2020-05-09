import React from 'react'
import {Route} from 'react-router-dom'
import Sidebar from './sidebar/sidebar'
import Navbar from './navbar/Navbar'
import Profile from './pagecontent/Profile/Profile'
import PathologySettings from './pagecontent/settings/Pathology/PathologySettings'
import Staff from './pagecontent/HumanResource/index'
import Records from './pagecontent/Records'
import Pathology from './pagecontent/Pathology/index'

export default function Index(props) {
  const [index,setindex]=React.useState({})
    return (
        <>
        <Navbar />
        <Sidebar />
        
    <div className="content-wrapper my-3"  style={{  
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} >
    <section className="content px-4 mt-4" >
  <Route path='/pathologist/records' render={()=><Records/>} />     
<Route path='/pathologist/humanResource' render={()=><Staff/>}/>       
<Route path='/pathologist/settings/pathology' render={()=><PathologySettings/>}/>
<Route path='/pathologist/pathology' render={()=><Pathology/>}/>
 <Route path='/pathologist/profile' render={()=><Profile/>}/>
      
       
  
 
      </section>
      </div>
        </>
    )
}
