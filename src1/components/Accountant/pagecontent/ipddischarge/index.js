import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Ipd from './Ipd'
import Visits from './Visits'
import IpdDiagnosis from './IpdDiagnosis'
import IpdCharges from './IpdCharges'
import IpdConsultantRegister from './IpdConsultantRegister'
import IpdPayment from './IpdPayment'
import IpdPrescription from './IpdPrescription'
export default function index() {
    return (
        <Switch>
             <Route path='/accountant/myIpd/discharge/diagnosis/:patientId' render={()=><IpdDiagnosis/>}/>
             <Route path='/accountant/myIpd/discharge/payment/:patientId' render={()=><IpdPayment/>}/>
             <Route path='/accountant/myIpd/discharge/charges/:patientId' render={()=><IpdCharges/>}/>
             <Route path='/accountant/myIpd/discharge/prescription/:patientId' render={()=><IpdPrescription/>}/>
             <Route path='/accountant/myIpd/discharge/consultantRegister/:patientId' render={()=><IpdConsultantRegister/>}/>
             <Route path='/accountant/myIpd/discharge/visit' render={()=><Visits/>}/>
            <Route path='' render={()=><Ipd/>}/>
        </Switch>
    )
}
