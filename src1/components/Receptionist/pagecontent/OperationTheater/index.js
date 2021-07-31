import React from 'react'
import { Switch,Route } from 'react-router-dom'
import OperationTheater from './OperationTheater'
export default function index() {
    return (
        <Switch>
            <Route path='' render={()=><OperationTheater/>}/> 
        </Switch>
    )
}
