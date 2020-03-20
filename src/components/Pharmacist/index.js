import React from 'react'
import {Route} from 'react-router-dom'
import Sidebar from './sidebar/sidebar'
import Navbar from './navbar/Navbar'
import Pharmacy1 from './pagecontent/Pharmacy'
import Profile from './pagecontent/Profile'
import SettingsPharmacy from './pagecontent/SettingsPharmacy'
import Records from './pagecontent/Records'
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
      <div className="card shadow">
        
<Route path='/pharmacist/settings/pharmacy' render={()=><SettingsPharmacy/>}/>
<Route path='/pharmacist/pharmacy' render={()=><Pharmacy1 setindex={setindex}/>}/>
 <Route path='/pharmacist/profile/:userId' render={()=><Profile/>}/>
 <Route path='/pharmacist/records' render={()=><Records/>}/>
 
      </div>
      </section>
      </div>
        </>
    )
}
