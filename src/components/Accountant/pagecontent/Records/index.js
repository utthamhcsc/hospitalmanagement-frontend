import React from 'react'
import { Switch, Route } from 'react-router-dom'

import IncomeReport from './IncomeReport'
import IncomeGroupReport from './IncomeGroupReport'
import ExpenseReport from './ExpenseReport'
import ExpenseGroupReport from './ExpenseGroupReport'

export default function index() {
    return (
        <Switch>
           <Route path='/accountant/records/incomereport' render={()=><IncomeReport/>}></Route>
           <Route path='/accountant/records/incomegroupreport' render={()=><IncomeGroupReport/>}></Route>
           <Route path='/accountant/records/expensereport' render={()=><ExpenseReport/>}></Route>
           <Route path='/accountant/records/expensegroupreport' render={()=><ExpenseGroupReport/>}></Route>
        </Switch>
    )
}
