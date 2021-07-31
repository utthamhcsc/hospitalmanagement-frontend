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
             <Route path='/doctor/myIpd/discharge' render={()=><Discharge/>}/>
             <Route path='/doctor/myIpd/diagnosis/:patientId' render={()=><IpdDiagnosis/>}/>
             <Route path='/doctor/myIpd/payment/:patientId' render={()=><IpdPayment/>}/>
             <Route path='/doctor/myIpd/charges/:patientId' render={()=><IpdCharges/>}/>
             <Route path='/doctor/myIpd/prescription/:patientId' render={()=><IpdPrescription/>}/>
             <Route path='/doctor/myIpd/consultantRegister/:patientId' render={()=><IpdConsultantRegister/>}/>
             <Route path='/doctor/myIpd/visit' render={()=><Visits/>}/>
            <Route path='' render={()=><Ipd/>}/>
        </Switch>
    )
}
