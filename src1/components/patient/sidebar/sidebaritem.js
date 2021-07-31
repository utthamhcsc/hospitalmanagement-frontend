import React from 'react';
import {NavLink} from 'react-router-dom'
import Userprofile from './userprofile';

const sidebaritem = (props) =>
{
return (
<div className="sidebar" >
  <Userprofile />
    <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column text-white" data-widget="treeview" role="menu" data-accordion="false">
           <li className="nav-item has-treeview shadow p-1">
               <NavLink className="nav-link py-1 text-white"  to="/patient/appointment">
                 <i class="text-xs fas fa-dungeon"></i> 
                 <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Appointment</p>
               </NavLink>
           </li>
           <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/patient/Opd">
                     <i class="text-xs fas fa-stethoscope"></i> 
                     <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> OPD - Out Patient</p> 
                </NavLink>
           </li>
           <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/patient/Ipd">
                    <i class="text-xs fas fa-procedures" aria-hidden="true"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> IPD - In Patient</p>
                </NavLink>
           </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/patient/pharmacy">
                     <i class="text-xs fas fa-mortar-pestle"></i> 
                     <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> Pharmacy</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/patient/pathology">
                    <i class="text-xs fas fa-flask"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Pathology</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1"> 
                <NavLink className="nav-link py-1 text-white" to="/patient/radiology">
                    <i class="text-xs fas fa-microscope"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Radiology</p>
                </NavLink>
            </li>
            <li class="treeview  ">
                <NavLink className="nav-link py-1 text-white" to="/patient/operationtheatre">
                    <i class="text-xs fas fa-cut"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Operation Theatre</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/patient/bloodbankstatus">
                    <i class="text-xs fas fa-tint"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Blood Bank</p>
                </NavLink>
            </li>
            
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/patient/vehicle">
                    <i class="text-xs fas fa-ambulance" aria-hidden="true"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> Ambulance</p> 
                </NavLink>
            </li>
            
            
            
        </ul>
      </nav>
    </div>
  );
}

export default sidebaritem;
