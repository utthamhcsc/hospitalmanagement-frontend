import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Pathology from './Pathology'
import TestReport from './TestReport'
export default function index() {
    return (
        <Switch>
            <Route path='/accountant/pathology/testreport' render={()=><TestReport/>}/>
            <Route path='' render={()=><Pathology/>}/> 
        </Switch>
    )
}
