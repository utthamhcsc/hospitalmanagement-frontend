import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Expence from './Expence'
import Income from './Income'
export default function index() {
    return (
        <Switch>
            <Route path='/admin/finance/income' render={()=><Income/>}/>
            <Route path='/admin/finance/expense' render={()=><Expence/>}/>
           
        </Switch>
    )
}
