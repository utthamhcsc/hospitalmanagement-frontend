import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Sidebar from './sidebar/sidebar'
import Navbar from './navbar/Navbar'
import Profile from './pagecontent/Profile/Profile'
import PathologySettings from './pagecontent/settings/Pathology/PathologySettings'
import Staff from './pagecontent/HumanResource/index'
import Records from './pagecontent/Records'
import Pathology from './pagecontent/Pathology/index'
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
  <Route path='/pathologist/records' render={()=><Records/>} />     
<Route path='/pathologist/humanResource' render={()=><Staff/>}/>       
<Route path='/pathologist/settings/pathology' render={()=><PathologySettings/>}/>
<Route path='/pathologist/pathology' render={()=><Pathology/>}/>
 <Route path='/pathologist/profile' render={()=><Profile/>}/>
 <Route path='/pathologist/messaging' render={()=><NoticeBoard/>}/>
       <Route path='/pathologist/messaging/newmessage' render={()=><NewMassege/>}/>
       <Route path='/pathologist/messaging/sendemail' render={()=><SendEmail/>}/>
       <Route path='/pathologist' render={()=><Home/>}/>
       </Switch>
 
 
 
      
       
  
 
      </section>
      </div>
        </>
    )
}
