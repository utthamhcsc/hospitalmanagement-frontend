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
             <Route path='/admin/myIpd/discharge' render={()=><Discharge/>}/>
             <Route path='/admin/myIpd/diagnosis/:patientId' render={()=><IpdDiagnosis/>}/>
             <Route path='/admin/myIpd/payment/:patientId' render={()=><IpdPayment/>}/>
             <Route path='/admin/myIpd/charges/:patientId' render={()=><IpdCharges/>}/>
             <Route path='/admin/myIpd/prescription/:patientId' render={()=><IpdPrescription/>}/>
             <Route path='/admin/myIpd/consultantRegister/:patientId' render={()=><IpdConsultantRegister/>}/>
             <Route path='/admin/myIpd/visit' render={()=><Visits/>}/>
            <Route path='' render={()=><Ipd/>}/>
        </Switch>
    )
}
