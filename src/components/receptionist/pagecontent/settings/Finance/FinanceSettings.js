import React from 'react'
import { BrowserRouter, Route, Switch, useLocation, Link } from 'react-router-dom'
import ExpenseHead from './ExpenseHead'
import IncomeHead from './IncomeHead'


export default function FinanceSettings(props) {
     
    return (
<div className='row'>
<div className='col-md-2 w-100'>
    <ul className='list-group'>
    <Link to='/receptionist/settings/finance/incomeHead' className='list-group-item'>Income Head</Link>
    <Link to='/receptionist/settings/finance/expenseHead' className='list-group-item'>Expense Head</Link>
        </ul>

</div>
<div className='col-md-10'>
<Switch>
           

<Route path={'/receptionist/settings/finance/expenseHead'} render={()=><ExpenseHead/>}/>
            <Route path='' render={()=><IncomeHead/>}/>
           
                </Switch>
    
</div>
      </div>
    )
}
