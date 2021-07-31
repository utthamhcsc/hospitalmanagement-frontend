import React from 'react'
import { BrowserRouter, Route, Switch, useLocation, Link } from 'react-router-dom'
import RadiologyCategory from './RadioCategory'
export default function RadiologySettings(props) {
     
    return (
<div className='row'>
<div className='col-md-2 w-100'>
    <ul className='list-group'>
    <Link to='/admin/settings/radiology/category' className='list-group-item'>Radiology Category</Link>
        </ul>

</div>
<div className='col-md-10'>
<Switch>
           
            <Route path='' render={()=><RadiologyCategory/>}/>
           
                </Switch>
    
</div>
      </div>
    )
}
