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
             <Route path='/patient/myIpd/discharge' render={()=><Discharge/>}/>
             <Route path='/patient/myIpd/diagnosis/:patientId' render={()=><IpdDiagnosis/>}/>
             <Route path='/patient/myIpd/payment/:patientId' render={()=><IpdPayment/>}/>
             <Route path='/patient/myIpd/charges/:patientId' render={()=><IpdCharges/>}/>
             <Route path='/patient/myIpd/prescription/:patientId' render={()=><IpdPrescription/>}/>
             <Route path='/patient/myIpd/consultantRegister/:patientId' render={()=><IpdConsultantRegister/>}/>
             <Route path='/patient/myIpd/visit' render={()=><Visits/>}/>
            <Route path='' render={()=><Ipd/>}/>
        </Switch>
    )
}
