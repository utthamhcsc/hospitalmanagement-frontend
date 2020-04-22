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
             <Route path='/doctor/myIpd/discharge/diagnosis/:patientId' render={()=><IpdDiagnosis/>}/>
             <Route path='/doctor/myIpd/discharge/payment/:patientId' render={()=><IpdPayment/>}/>
             <Route path='/doctor/myIpd/discharge/charges/:patientId' render={()=><IpdCharges/>}/>
             <Route path='/doctor/myIpd/discharge/prescription/:patientId' render={()=><IpdPrescription/>}/>
             <Route path='/doctor/myIpd/discharge/consultantRegister/:patientId' render={()=><IpdConsultantRegister/>}/>
             <Route path='/doctor/myIpd/discharge/visit' render={()=><Visits/>}/>
            <Route path='' render={()=><Ipd/>}/>
        </Switch>
    )
}
