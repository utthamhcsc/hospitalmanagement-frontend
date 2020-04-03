import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AmbulanceList from './AmbulanceList'
import AmbulanceCallList from './AmbulanceCallList'

export default function index() {
    return (
        <Switch>
         
            <Route path='/admin/vehicle/ambilancecall' render={()=><AmbulanceCallList/>} />
            <Route path='' render={()=><AmbulanceList/>} />
        </Switch>
    )
}
