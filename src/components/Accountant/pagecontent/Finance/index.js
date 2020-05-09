import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Expence from './Expence'
import Income from './Income'
export default function index() {
    return (
        <Switch>
            <Route path='/accountant/finance/income' render={()=><Income/>}/>
            <Route path='/accountant/finance/expense' render={()=><Expence/>}/>
           
        </Switch>
    )
}
