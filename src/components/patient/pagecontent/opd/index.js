import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Opd from './Opd'
import OpdVisits from './OpdVisits'
import Diagnosis from './Diagnosis'
import Charges from './Charges'
import Payment from './Payment'
import Bill from './Bill'
export default ()=> {
    const history=useHistory();
    return (
        <Switch history={history}>
              <Route path='/patient/myopd/bill/:patientId' render={()=><Bill/>}/>
             <Route path='/patient/myopd/payment/:patientId' render={()=><Payment/>}/>
            <Route path='/patient/myopd/charges/:patientId' render={()=><Charges/>}/>
            <Route path='/patient/myopd/diagnosis/:patientId' render={()=><Diagnosis/>}/>
             <Route path='/patient/myopd/visits/:patientId' render={()=><OpdVisits/>}/>

            <Route path='' render={()=><Opd/>}/>
        </Switch>
    )
}
