import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Sidebar from './sidebar/sidebar'
import Navbar from './navbar/Navbar'
import Pharmacy1 from './pagecontent/pharmacy/Pharmacy'
import Profile from './pagecontent/Profile/Profile'
import SettingsPharmacy from './pagecontent/SettingsPharmacy'
import Staff from './pagecontent/HumanResource/index'
import Records from './pagecontent/Records'
import NoticeBoard from './pagecontent/Messaging/index'
import NewMassege from './pagecontent/Messaging/NewMessage'
import SendEmail from './pagecontent/Messaging/SendEmail'
import Home from './pagecontent/home'


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
      <Switch>
 <Route path='/pharmacist/records' render={()=><Records/>} />     
<Route path='/pharmacist/humanResource' render={()=><Staff/>}/>       
<Route path='/pharmacist/settings/pharmacy' render={()=><SettingsPharmacy/>}/>
<Route path='/pharmacist/pharmacy' render={()=><Pharmacy1 setindex={setindex}/>}/>
 <Route path='/pharmacist/profile' render={()=><Profile/>}/>
 <Route path='/pharmacist/messaging' render={()=><NoticeBoard/>}/>
       <Route path='/pharmacist/messaging/newmessage' render={()=><NewMassege/>}/>
       <Route path='/pharmacist/messaging/sendemail' render={()=><SendEmail/>}/>
       <Route path='/pharmacist' render={()=><Home/>}/>
       </Switch>
 
      </section>
      </div>
        </>
    )
}
