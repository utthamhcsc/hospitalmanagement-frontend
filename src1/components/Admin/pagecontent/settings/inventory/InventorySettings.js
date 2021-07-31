import React from 'react'
import { BrowserRouter, Route, Switch, useLocation, Link } from 'react-router-dom'
import Supplier from './Supplier'
import ItemCategory from './ItemCategory'
import ItemStore from './ItemStore'

export default function InventorySettings(props) {
     
    return (
<div className='row'>
<div className='col-md-2 w-100'>
    <ul className='list-group'>
    <Link to='/admin/settings/inventory/category' className='list-group-item'>Item Category</Link>
    <Link to='/admin/settings/inventory/store' className='list-group-item'>Item Store</Link>
    <Link to='/admin/settings/inventory/supplier' className='list-group-item'>Item Supplier</Link>
        </ul>

</div>
<div className='col-md-10'>
<Switch>
            
<Route path={'/admin/settings/inventory/supplier'} render={()=><Supplier/>}/>

<Route path={'/admin/settings/inventory/store'} render={()=><ItemStore/>}/>
            <Route path='' render={()=><ItemCategory/>}/>
          
                </Switch>
    
</div>
      </div>
    )
}
