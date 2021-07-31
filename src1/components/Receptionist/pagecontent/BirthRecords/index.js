import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Birth from './Birth'
import Death from './Death'
export default function index() {
    return (
        <Switch>
            <Route path='/accountant/birthordeath/birth' render={()=><Birth/>}/>
            <Route path='/accountant/birthordeath/death' render={()=><Death/>}/>
           
        </Switch>
    )
}
