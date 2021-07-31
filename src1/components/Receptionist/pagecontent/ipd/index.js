import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Ipd from './Ipd'
import Visits from './Visits'
import IpdDiagnosis from './IpdDiagnosis'
import IpdCharges from './IpdCharges'
import IpdConsultantRegister from './IpdConsultantRegister'
import IpdPayment from './IpdPayment'
import IpdPrescription from './IpdPrescription'
import Discharge from '../ipddischarge/index'
export default function index() {
    return (
        <Switch>
             <Route path='/receptionist/myIpd/discharge' render={()=><Discharge/>}/>
             <Route path='/receptionist/myIpd/diagnosis/:patientId' render={()=><IpdDiagnosis/>}/>
             <Route path='/receptionist/myIpd/payment/:patientId' render={()=><IpdPayment/>}/>
             <Route path='/receptionist/myIpd/charges/:patientId' render={()=><IpdCharges/>}/>
             <Route path='/receptionist/myIpd/prescription/:patientId' render={()=><IpdPrescription/>}/>
             <Route path='/receptionist/myIpd/consultantRegister/:patientId' render={()=><IpdConsultantRegister/>}/>
             <Route path='/receptionist/myIpd/visit' render={()=><Visits/>}/>
            <Route path='' render={()=><Ipd/>}/>
        </Switch>
    )
}
