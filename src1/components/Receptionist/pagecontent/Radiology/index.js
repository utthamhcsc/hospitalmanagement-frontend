import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Radiology from './Radiology'
import TestReport from './TestReport'
export default function index() {
    return (
        <Switch>
            <Route path='/receptionist/radiology/testreport' render={()=><TestReport/>}/>
            <Route path='' render={()=><Radiology/>}/> 
        </Switch>
    )
}
