import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import Userprofile from './userprofile';

const sidebaritem = (props) =>
{
return (
<div className="sidebar" >
  <Userprofile />
    <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column text-white" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/pharmacist/pharmacy">
                     <i class="text-xs fas fa-mortar-pestle"></i> 
                     <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> Pharmacy</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1" >
                <Link className="nav-link py-1 text-white">
                    <i class="text-xs fas fa-cogs"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>
                        <i class="fa fa-angle-left pull-right"></i>Records</p>
                </Link>
                <ul className="nav nav-treeview text-dark bg-light" style={{zIndex:-999}}>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" 
                    to="/pharmacist/records/billreport">
                        <i class="text-xs fas fa-angle-right"></i>Bill Reports</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" 
                    to="/pharmacist/records/expirymedicine"><i class="text-xs fas fa-angle-right"></i> Expiry Medicine</NavLink></li>             

                    </ul>

                </li>
        
            <li className="nav-item has-treeview shadow p-1" >
                <Link className="nav-link py-1 text-white">
                    <i class="text-xs fas fa-cogs"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>
                        <i class="fa fa-angle-left pull-right"></i>Setup</p>
                </Link>
                <ul className="nav nav-treeview text-dark bg-light" style={{zIndex:-999}}>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/pharmacist/settings/pharmacy"><i class="text-xs fas fa-angle-right"></i> Pharmacy</NavLink></li>
                                       

                    </ul>

                </li>
        </ul>
      </nav>
    </div>
  );
}

export default sidebaritem;
