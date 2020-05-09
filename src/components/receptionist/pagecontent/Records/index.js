import React from 'react'
import { Switch, Route } from 'react-router-dom'

import IncomeReport from './IncomeReport'
import IncomeGroupReport from './IncomeGroupReport'
import ExpenseReport from './ExpenseReport'
import ExpenseGroupReport from './ExpenseGroupReport'

export default function index() {
    return (
        <Switch>
           <Route path='/receptionist/records/incomereport' render={()=><IncomeReport/>}></Route>
           <Route path='/receptionist/records/incomegroupreport' render={()=><IncomeGroupReport/>}></Route>
           <Route path='/receptionist/records/expensereport' render={()=><ExpenseReport/>}></Route>
           <Route path='/receptionist/records/expensegroupreport' render={()=><ExpenseGroupReport/>}></Route>
        </Switch>
    )
}
