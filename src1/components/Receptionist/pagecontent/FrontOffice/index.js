import React from 'react'
import { Switch,Route} from 'react-router-dom'
import Appointment from './Appointment'
import Complain from './Complain'
import PostalReceive from './PostalReceive'
import PostalDispatch from './PostalDispatch'
import Callog from './Callog'
import Visitor from './Visitor'

export default function index() {
    return (
        <Switch>
            <Route path='/accountant/appointment/complain' render={()=><Complain />}/>
<Route path='/accountant/appointment/postalReceive' render={()=><PostalReceive />}/>
<Route path='/accountant/appointment/postaldispatch' render={()=><PostalDispatch/>}/>
<Route path='/accountant/appointment/visitor' render={()=><Visitor/>}/>
<Route path='/accountant/appointment/callog' render={()=><Callog />}/>

          <Route path='' render={()=><Appointment></Appointment>}/>  
        </Switch>
    )
}
