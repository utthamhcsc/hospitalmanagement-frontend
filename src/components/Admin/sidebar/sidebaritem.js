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
               <NavLink className="nav-link py-1 text-white"  to="/admin/appointment">
                 <i class="text-xs fas fa-dungeon"></i> 
                 <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Front Office</p>
               </NavLink>
           </li>
           <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/admin/myOpd">
                     <i class="text-xs fas fa-stethoscope"></i> 
                     <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> OPD - Out Patient</p> 
                </NavLink>
           </li>
           <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/admin/myIpd">
                    <i class="text-xs fas fa-procedures" aria-hidden="true"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> IPD - In Patient</p>
                </NavLink>
           </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/admin/pharmacy">
                     <i class="text-xs fas fa-mortar-pestle"></i> 
                     <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> Pharmacy</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/admin/pathology">
                    <i class="text-xs fas fa-flask"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Pathology</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1"> 
                <NavLink className="nav-link py-1 text-white" to="/admin/radiology">
                    <i class="text-xs fas fa-microscope"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Radiology</p>
                </NavLink>
            </li>
            <li class="treeview  ">
                <NavLink className="nav-link py-1 text-white" to="/admin/operationtheatre">
                    <i class="text-xs fas fa-cut"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Operation Theatre</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/admin/bloodbankstatus">
                    <i class="text-xs fas fa-tint"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Blood Bank</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/admin/tpa">
                    <i class="text-xs fas fa-umbrella"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>TPA Management</p>
                </NavLink>
            </li>
            
            <li className="nav-item has-treeview shadow p-1">
                 <NavLink className="nav-link py-1 text-white"to='/admin/birth/#123' ><i class="fa fa-birthday-cake" aria-hidden="true"></i> 
                     <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Finance<i class="fa fa-angle-left pull-right"></i></p>
                 </NavLink>
                 <ul className="nav nav-treeview text-dark bg-light">
                      <li className="nav-item"><NavLink className="nav-link py-1 " to="/admin/finance/income"><i class="text-xs fas fa-angle-right"></i> Income </NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link py-1 " to="/admin/finance/expense"><i class="text-xs fas fa-angle-right"></i> Expense</NavLink></li>
                 </ul>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/admin/vehicle">
                    <i class="text-xs fas fa-ambulance" aria-hidden="true"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> Ambulance</p> 
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                 <NavLink className="nav-link py-1 text-white"to='/admin/birth/#123' ><i class="fa fa-birthday-cake" aria-hidden="true"></i> 
                     <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Birth & Death Record<i class="fa fa-angle-left pull-right"></i></p>
                 </NavLink>
                 <ul className="nav nav-treeview text-dark bg-light">
                      <li className="nav-item"><NavLink className="nav-link py-1 " to="/admin/birthordeath/birth"><i class="text-xs fas fa-angle-right"></i> Birth Record </NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link py-1 " to="/admin/birthordeath/death"><i class="text-xs fas fa-angle-right"></i> Death Record</NavLink></li>
                 </ul>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/admin/humanResource">
                    <i class="text-xs fas fa-sitemap"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Human Resource</p> 
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to= "/admin/notification">
                    <i class = "text-xs fas fa-bullhorn"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Messaging</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/admin/content">
                   <i class="text-xs fas fa-download"></i> 
                   <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Download Center</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/admin/itemstock">
                    <i class="text-xs fas fa-luggage-cart"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Inventory</p> 
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <Link className="nav-link py-1 text-white" >
                    <i class="text-xs fas fa-line-chart"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Reports <i class="fa fa-angle-left pull-right"></i></p> 
                 </Link>
                <ul className="nav nav-treeview text-dark bg-light">
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to='/admin/records/pharmacybillreport'><i class="text-xs fas fa-angle-right"></i> Pharmacy Bill Report</NavLink></li>
                    
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to='/admin/records/appointmentreport'><i class="text-xs fas fa-angle-right"></i> Appointment Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/opdreport"><i class="text-xs fas fa-angle-right"></i> OPD Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/ipdreport"><i class="text-xs fas fa-angle-right"></i> IPD Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/dischargereport"><i class="text-xs fas fa-angle-right"></i> Discharged Patient</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/expiryreport"><i class="text-xs fas fa-angle-right"></i> Expiry Medicine Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/radiologyreport"><i class="text-xs fas fa-angle-right"></i> Radiology Patient Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/pathologyreport"><i class="text-xs fas fa-angle-right"></i> Pathology Patient Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/otpatientreport"><i class="text-xs fas fa-angle-right"></i> OT Patient Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/bloodissuereport"><i class="text-xs fas fa-angle-right"></i> Blood Issue Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/blooddonorreport"><i class="text-xs fas fa-angle-right"></i> Blood Donor Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/tpareport"><i class="text-xs fas fa-angle-right"></i> TPA Patient Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/incomereport"><i class="text-xs fas fa-angle-right"></i> Income  Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/incomegroupreport"><i class="text-xs fas fa-angle-right"></i> Income Group Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/expensereport"><i class="text-xs fas fa-angle-right"></i> Expense  Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/expensegroupreport"><i class="text-xs fas fa-angle-right"></i> Expense Group Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/ambulancereport"><i class="text-xs fas fa-angle-right"></i> Ambulance  Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/birthreport"><i class="text-xs fas fa-angle-right"></i> Birth  Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/records/deathreport"><i class="text-xs fas fa-angle-right"></i> Death  Report</NavLink></li>
                   
                   
                   </ul> 
            </li>
            <li className="nav-item has-treeview shadow p-1" >
                <Link className="nav-link py-1 text-white">
                    <i class="text-xs fas fa-cogs"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>
                        <i class="fa fa-angle-left pull-right"></i>Setup</p>
                </Link>
                <ul className="nav nav-treeview text-dark bg-light" style={{zIndex:-999}}>
                <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/settings/patient"><i class="text-xs fas fa-angle-right"></i> Patient</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/settings/pharmacy"><i class="text-xs fas fa-angle-right"></i> Pharmacy</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/settings/bed"><i class="text-xs fas fa-angle-right"></i> Bed</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/settings/frontOffice"><i class="text-xs fas fa-angle-right"></i> Front Office</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/settings/charges"><i class="text-xs fas fa-angle-right"></i> Charges</NavLink></li>            
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/settings/inventory"><i class="text-xs fas fa-angle-right"></i> Inventory</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/settings/humanResource"><i class="text-xs fas fa-angle-right"></i> Human Resource</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/settings/pathology"><i class="text-xs fas fa-angle-right"></i> Pathology</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/settings/radiology"><i class="text-xs fas fa-angle-right"></i> Radiology</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/admin/settings/finance"><i class="text-xs fas fa-angle-right"></i> Finance</NavLink></li>
                 
                    </ul>

                </li>
        </ul>
      </nav>
    </div>
  );
}

export default sidebaritem;
