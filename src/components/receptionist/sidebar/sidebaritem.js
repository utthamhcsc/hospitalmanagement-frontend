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
               <NavLink className="nav-link py-1 text-white"  to="/receptionist/appointment">
                 <i class="text-xs fas fa-dungeon"></i> 
                 <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Front Office</p>
               </NavLink>
           </li>
           <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/myOpd">
                     <i class="text-xs fas fa-stethoscope"></i> 
                     <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> OPD - Out Patient</p> 
                </NavLink>
           </li>
           <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/myIpd">
                    <i class="text-xs fas fa-procedures" aria-hidden="true"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> IPD - In Patient</p>
                </NavLink>
           </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/pharmacy">
                     <i class="text-xs fas fa-mortar-pestle"></i> 
                     <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> Pharmacy</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/pathology">
                    <i class="text-xs fas fa-flask"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Pathology</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1"> 
                <NavLink className="nav-link py-1 text-white" to="/receptionist/radiology">
                    <i class="text-xs fas fa-microscope"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Radiology</p>
                </NavLink>
            </li>
            <li class="treeview  ">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/operationtheatre">
                    <i class="text-xs fas fa-cut"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Operation Theatre</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/bloodbankstatus">
                    <i class="text-xs fas fa-tint"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Blood Bank</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/tpa">
                    <i class="text-xs fas fa-umbrella"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>TPA Management</p>
                </NavLink>
            </li>
            
            <li className="nav-item has-treeview shadow p-1">
                 <NavLink className="nav-link py-1 text-white"to='/receptionist/birth/#123' ><i class="fa fa-birthday-cake" aria-hidden="true"></i> 
                     <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Finance<i class="fa fa-angle-left right"></i></p>
                 </NavLink>
                 <ul className="nav nav-treeview text-dark bg-light">
                      <li className="nav-item"><NavLink className="nav-link py-1 " to="/receptionist/finance/income"><i class="text-xs fas fa-angle-right"></i> Income </NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link py-1 " to="/receptionist/finance/expense"><i class="text-xs fas fa-angle-right"></i> Expense</NavLink></li>
                 </ul>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/vehicle">
                    <i class="text-xs fas fa-ambulance" aria-hidden="true"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> Ambulance</p> 
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                 <NavLink className="nav-link py-1 text-white"to='/receptionist/birth/#123' ><i class="fa fa-birthday-cake" aria-hidden="true"></i> 
                     <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Birth & Death Record<i class="fa fa-angle-left right"></i></p>
                 </NavLink>
                 <ul className="nav nav-treeview text-dark bg-light">
                      <li className="nav-item"><NavLink className="nav-link py-1 " to="/receptionist/birthordeath/birth"><i class="text-xs fas fa-angle-right"></i> Birth Record </NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link py-1 " to="/receptionist/birthordeath/death"><i class="text-xs fas fa-angle-right"></i> Death Record</NavLink></li>
                 </ul>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/humanResource">
                    <i class="text-xs fas fa-sitemap"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Human Resource</p> 
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to= "/receptionist/messaging">
                    <i class = "text-xs fas fa-bullhorn"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Messaging</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/content">
                   <i class="text-xs fas fa-download"></i> 
                   <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Download Center</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/itemstock">
                    <i class="text-xs fas fa-luggage-cart"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Inventory</p> 
                </NavLink>
            </li>
            
        </ul>
      </nav>
    </div>
  );
}

export default sidebaritem;
