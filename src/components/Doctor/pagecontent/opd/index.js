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
              <Route path='/doctor/myopd/bill/:patientId' render={()=><Bill/>}/>
             <Route path='/doctor/myopd/payment/:patientId' render={()=><Payment/>}/>
            <Route path='/doctor/myopd/charges/:patientId' render={()=><Charges/>}/>
            <Route path='/doctor/myopd/diagnosis/:patientId' render={()=><Diagnosis/>}/>
             <Route path='/doctor/myopd/visits/:patientId' render={()=><OpdVisits/>}/>

            <Route path='' render={()=><Opd/>}/>
        </Switch>
    )
}
