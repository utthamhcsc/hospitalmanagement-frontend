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
              <Route path='/accountant/myopd/bill/:patientId' render={()=><Bill/>}/>
             <Route path='/accountant/myopd/payment/:patientId' render={()=><Payment/>}/>
            <Route path='/accountant/myopd/charges/:patientId' render={()=><Charges/>}/>
            <Route path='/accountant/myopd/diagnosis/:patientId' render={()=><Diagnosis/>}/>
             <Route path='/accountant/myopd/visits/:patientId' render={()=><OpdVisits/>}/>

            <Route path='' render={()=><Opd/>}/>
        </Switch>
    )
}
