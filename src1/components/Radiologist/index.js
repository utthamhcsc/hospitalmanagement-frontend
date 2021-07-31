import React from 'react'
import {Route} from 'react-router-dom'
import Sidebar from './sidebar/sidebar'
import Navbar from './navbar/Navbar'
import Radiology from './pagecontent/Radiology/index'
import Staff from './pagecontent/HumanResource/index'
import Records from './pagecontent/Records'
import Profile from './pagecontent/Profile/Profile'
import RadiologySettings from './pagecontent/settings/Radiology/RadiologySettings'

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
 <Route path='/radiologist/records' render={()=><Records/>} />     
<Route path='/radiologist/humanResource' render={()=><Staff/>}/>       
<Route path='/radiologist/settings/radiology' render={()=><RadiologySettings/>}/>
<Route path='/radiologist/radiology' render={()=><Radiology/>}/>
 <Route path='/radiologist/profile' render={()=><Profile/>}/>
 
      
       
  
 
      </section>
      </div>
        </>
    )
}
