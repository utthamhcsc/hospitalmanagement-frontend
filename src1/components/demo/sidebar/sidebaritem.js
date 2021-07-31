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
               <NavLink className="nav-link py-1 text-white"  to="/receptionist/appointment">
                 <i class="text-xs fas fa-dungeon"></i> 
                 <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Front Office</p>
               </NavLink>
           </li>
           <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/Opd">
                     <i class="text-xs fas fa-stethoscope"></i> 
                     <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> OPD - Out Patient</p> 
                </NavLink>
           </li>
           <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/Ipd">
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
                <NavLink className="nav-link py-1 text-white" to="/receptionist/tpamanagement">
                    <i class="text-xs fas fa-umbrella"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>TPA Management</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/vehicle">
                    <i class="text-xs fas fa-ambulance" aria-hidden="true"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}> Ambulance</p> 
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                 <NavLink className="nav-link py-1 text-white"to='/receptionist/birth/#123' ><i class="fa fa-birthday-cake" aria-hidden="true"></i> 
                     <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Birth & Death Record<i class="fa fa-angle-left pull-right"></i></p>
                 </NavLink>
                 <ul className="nav nav-treeview text-dark bg-light">
                      <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/receptionist/birthordeath"><i class="text-xs fas fa-angle-right"></i> Birth Record </NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/receptionist/birthordeath/death"><i class="text-xs fas fa-angle-right"></i> Death Record</NavLink></li>
                 </ul>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/receptionist/staff">
                    <i class="text-xs fas fa-sitemap"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Human Resource</p> 
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to= "/receptionist/notification">
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
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="#ertyu">
                    <i class="text-xs fas fa-line-chart"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Reports <i class="fa fa-angle-left pull-right"></i></p> 
                </NavLink>
                <ul className="nav nav-treeview text-dark bg-light">
                    <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/appointment/appointmentReport"><i class="text-xs fas fa-angle-right"></i> Appointment Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/patient/opd_report"><i class="text-xs fas fa-angle-right"></i> OPD Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/patient/ipdreport"><i class="text-xs fas fa-angle-right"></i> IPD Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/patient/dischargepatientReport"><i class="text-xs fas fa-angle-right"></i> Discharged Patient</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/pathology/pathologyreport"><i class="text-xs fas fa-angle-right"></i> Pathology Patient Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/radio/radiologyreport"><i class="text-xs fas fa-angle-right"></i> Radiology Patient Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/operationtheatre/otreport"><i class="text-xs fas fa-angle-right"></i> OT Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/vehicle/ambulancereport"><i class="text-xs fas fa-angle-right"></i> Ambulance Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/staffattendance/attendancereport"><i class="text-xs fas fa-angle-right"></i> Staff Attendance Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/item/itemreport"><i class="text-xs fas fa-angle-right"></i> Inventory Stock Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/item/additemreport"><i class="text-xs fas fa-angle-right"></i> Inventory Item Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/issueitem/issueinventoryreport"><i class="text-xs fas fa-angle-right"></i> Inventory Issue Report</NavLink></li>
                </ul>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="#sdfghj">
                    <i class="text-xs fas fa-cogs"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}><i class="fa fa-angle-left pull-right"></i>Setup</p>
                </NavLink>
                <ul className="nav nav-treeview text-dark bg-light">
                    <li className="nav-item"> 
                       <NavLink className="nav-link py-1 text-white" to=""><i class="text-xs fas fa-angle-right"></i> Patient</NavLink>
                    </li>
                                                        <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/charges"><i class="text-xs fas fa-angle-right"></i> Hospital Charges</NavLink></li>
                                                            <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/setup/bed/status"><i class="text-xs fas fa-angle-right"></i> Bed</NavLink></li>
                                                                <li className="nav-item"><NavLink className="nav-link py-1 text-white" to="/visitorspurpose"><i class="text-xs fas fa-angle-right"></i> Front Office</NavLink></li>
                                

                    </ul>

                </li>
        </ul>
      </nav>
    </div>
  );
}

export default sidebaritem;
