import React from 'react'
import { Route } from 'react-router-dom'
import BillReport from './BillReport'
import ExpiryReports from './ExpiryReports'

export default function Records() {
    return (
        <div>
            <Route path='/pharmacist/records/billreport' render={()=><BillReport/>}/>
            <Route path='/pharmacist/records/expirymedicine' render={()=><ExpiryReports/>}/>
        </div>
    )
}
