import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BloodBank from './BloodBank'
import BloodDonar from './BloodDonar'
import BloodIssue from './BloodIssue'
export default function index() {
    return (
        <Switch>
            <Route path='/accountant/bloodbankstatus/issue' render={()=><BloodIssue/>}/>
            <Route path='/accountant/bloodbankstatus/donor' render={()=><BloodDonar/>}/>
            <Route path='' render={()=><BloodBank/>}/> 
        </Switch>
    )
}
