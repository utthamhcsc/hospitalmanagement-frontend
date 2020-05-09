import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PathologyReport from './PathologyReport'

export default function index() {
    return (
        <Switch>
           <Route path='/pathologist/records/pathologyreport' render={()=><PathologyReport/>}></Route>
          </Switch>
    )
}
