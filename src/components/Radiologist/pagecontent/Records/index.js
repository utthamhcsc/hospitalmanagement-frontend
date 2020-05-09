import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RadiologyReport from './RadiologyReport'
export default function index() {
    return (
        <Switch>
           <Route path='/radiologist/records/radiologyreport' render={()=><RadiologyReport/>}></Route>
        </Switch>
    )
}
