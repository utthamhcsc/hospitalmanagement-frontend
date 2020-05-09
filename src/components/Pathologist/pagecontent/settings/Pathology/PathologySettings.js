import React from 'react'
import { BrowserRouter, Route, Switch, useLocation, Link } from 'react-router-dom'
import AddPathologyCategory from '../../../../../Forms/Settings/pathology/AddPathologyCategory'
import PathologyCategory from './PathologyCategory'
export default function PathologySettings(props) {
     
    return (
<div className='row'>
<div className='col-md-2 w-100'>
    <ul className='list-group'>
    <Link to='/accountant/settings/pathology/category' className='list-group-item'>Pathology Category</Link>
        </ul>

</div>
<div className='col-md-10'>
<Switch>
            <Route path='' render={()=><PathologyCategory/>}/> 
          
                </Switch>
    
</div>
      </div>
    )
}
