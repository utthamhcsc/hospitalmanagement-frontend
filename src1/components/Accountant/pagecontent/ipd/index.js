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
             <Route path='/accountant/myIpd/discharge' render={()=><Discharge/>}/>
             <Route path='/accountant/myIpd/diagnosis/:patientId' render={()=><IpdDiagnosis/>}/>
             <Route path='/accountant/myIpd/payment/:patientId' render={()=><IpdPayment/>}/>
             <Route path='/accountant/myIpd/charges/:patientId' render={()=><IpdCharges/>}/>
             <Route path='/accountant/myIpd/prescription/:patientId' render={()=><IpdPrescription/>}/>
             <Route path='/accountant/myIpd/consultantRegister/:patientId' render={()=><IpdConsultantRegister/>}/>
             <Route path='/accountant/myIpd/visit' render={()=><Visits/>}/>
            <Route path='' render={()=><Ipd/>}/>
        </Switch>
    )
}
