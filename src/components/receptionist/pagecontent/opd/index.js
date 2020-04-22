import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Opd from './Opd'
import OpdVisits from './OpdVisits'
import Diagnosis from './Diagnosis'
import Charges from './Charges'
import Payment from './Payment'
import Bill from './Bill'
export default function index() {
    return (
        <Switch>
              <Route path='/receptionist/myopd/bill/:patientId' render={()=><Bill/>}/>
             <Route path='/receptionist/myopd/payment/:patientId' render={()=><Payment/>}/>
            <Route path='/receptionist/myopd/charges/:patientId' render={()=><Charges/>}/>
            <Route path='/receptionist/myopd/diagnosis/:patientId' render={()=><Diagnosis/>}/>
             <Route path='/receptionist/myopd/visits/:patientId' render={()=><OpdVisits/>}/>

            <Route path='' render={()=><Opd/>}/>
        </Switch>
    )
}
