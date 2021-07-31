import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import Userprofile from './userprofile';

const sidebaritem = (props) =>
{
return (
<div className="sidebar skin-purple" >
  <Userprofile />
    <nav className="text-xs text-justify">
        <ul className="nav nav-pills nav-sidebar flex-column text-black nav-flat  nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
           <li className="nav-item has-treeview  ">
               <NavLink className="nav-link text-xs text-capitalize text-black"  to="/admin/appointment">
                 <i class=" fas nav-icon text-xs fa-dungeon"></i> 
                 <p className='' >Front Office</p>
               </NavLink>
           </li>
           <li className="nav-item has-treeview  ">
                <NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/myOpd">
                     <i class=" fas nav-icon text-xs fa-stethoscope"></i> 
                     <p className='' > OPD - Out Patient</p> 
                </NavLink>
           </li>
           <li className="nav-item has-treeview  ">
                <NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/myIpd">
                    <i class=" fas nav-icon text-xs fa-procedures" aria-hidden="true"></i> 
                    <p className='' > IPD - In Patient</p>
                </NavLink>
           </li>
            <li className="nav-item has-treeview  ">
                <NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/pharmacy">
                     <i class=" fas nav-icon text-xs fa-mortar-pestle"></i> 
                     <p className='' > Pharmacy</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview  ">
                <NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/pathology">
                    <i class=" fas nav-icon text-xs fa-flask"></i> 
                    <p className='' >Pathology</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview  "> 
                <NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/radiology">
                    <i class=" fas nav-icon text-xs fa-microscope"></i> 
                    <p className='' >Radiology</p>
                </NavLink>
            </li>
            <li class="nav-item has-treeview  ">
                <NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/operationtheatre">
                    <i class=" fas nav-icon text-xs fa-cut"></i> 
                    <p className='' >Operation Theatre</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview  ">
                <NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/bloodbankstatus">
                    <i class=" fas nav-icon text-xs fa-tint"></i> 
                    <p className='' >Blood Bank</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview  ">
                <NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/tpa">
                    <i class=" fas nav-icon text-xs fa-umbrella"></i> 
                    <p className='' >TPA Management</p>
                </NavLink>
            </li>
            
            <li className="nav-item has-treeview  ">
                 <NavLink className="nav-link text-xs text-capitalize text-black"to='/admin/birth/#123' ><i class="fa nav-icon text-xs fa-birthday-cake" aria-hidden="true"></i> 
                     <p className='' >Finance<i class="fa nav-icon text-xs fa-angle-left right"></i></p>
                 </NavLink>
                 <ul className="nav nav-treeview  ">
                      <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/finance/income"><i class=" fas nav-icon text-xs fa-angle-right"></i> Income </NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/finance/expense"><i class=" fas nav-icon text-xs fa-angle-right"></i> Expense</NavLink></li>
                 </ul>
            </li>
            <li className="nav-item has-treeview  ">
                <NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/vehicle">
                    <i class=" fas nav-icon text-xs fa-ambulance" aria-hidden="true"></i> 
                    <p className='' > Ambulance</p> 
                </NavLink>
            </li>
            <li className="nav-item has-treeview  ">
                 <NavLink className="nav-link text-xs text-capitalize text-black"to='/admin/birth/#123' ><i class="fa nav-icon text-xs fa-birthday-cake" aria-hidden="true"></i> 
                     <p className='' >Birth & Death Record<i class="fa nav-icon text-xs fa-angle-left right"></i></p>
                 </NavLink>
                 <ul className="nav nav-treeview  ">
                      <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/birthordeath/birth"><i class=" fas nav-icon text-xs fa-angle-right"></i> Birth Record </NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/birthordeath/death"><i class=" fas nav-icon text-xs fa-angle-right"></i> Death Record</NavLink></li>
                 </ul>
            </li>
            <li className="nav-item has-treeview  ">
                <NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/humanResource">
                    <i class=" fas nav-icon text-xs fa-sitemap"></i> 
                    <p className='' >Human Resource</p> 
                </NavLink>
            </li>
            <li className="nav-item has-treeview  ">
                <NavLink className="nav-link text-xs text-capitalize text-black" to= "/admin/messaging">
                    <i class = " fas nav-icon text-xs fa-bullhorn"></i> 
                    <p className='' >Messaging</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview  ">
                <NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/content">
                   <i class=" fas nav-icon text-xs fa-download"></i> 
                   <p className='' >Download Center</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview  ">
                <NavLink className="nav-link text-xs text-capitalize text-black" to="/admin/itemstock">
                    <i class=" fas nav-icon text-xs fa-luggage-cart"></i> 
                    <p className='' >Inventory</p> 
                </NavLink>
            </li>
            <li className="nav-item has-treeview  ">
                <Link className="nav-link text-xs text-capitalize text-black" >
                    <i class=" fas nav-icon text-xs fa-line-chart"></i> 
                    <p className='' >Reports <i class="fa nav-icon text-xs fa-angle-left right"></i></p> 
                 </Link>
                <ul className="nav nav-treeview  ">
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to='/admin/records/pharmacybillreport'><i class=" fas nav-icon text-xs fa-angle-right"></i> Pharmacy Bill Report</NavLink></li>
                    
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to='/admin/records/appointmentreport'><i class=" fas nav-icon text-xs fa-angle-right"></i> Appointment Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/opdreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> OPD Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/ipdreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> IPD Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/dischargereport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Discharged Patient</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/expiryreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Expiry Medicine Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/radiologyreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Radiology Patient Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/pathologyreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Pathology Patient Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/otpatientreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> OT Patient Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/bloodissuereport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Blood Issue Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/blooddonorreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Blood Donor Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/tpareport"><i class=" fas nav-icon text-xs fa-angle-right"></i> TPA Patient Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/incomereport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Income  Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/incomegroupreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Income Group Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/expensereport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Expense  Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/expensegroupreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Expense Group Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/ambulancereport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Ambulance  Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/birthreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Birth  Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/deathreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Death  Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/userlogreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> User  Log</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/patientcredentialreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Patient Credential  Report</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/records/emailsmsreport"><i class=" fas nav-icon text-xs fa-angle-right"></i> Email/Sms sent  Report</NavLink></li>
                   
                   </ul> 
            </li>
            <li className="nav-item has-treeview  " >
                <Link className="nav-link text-xs text-capitalize text-black">
                    <i class=" fas nav-icon text-xs fa-cogs"></i> 
                    <p className='' >
                        <i class="fa nav-icon text-xs fa-angle-left right"></i>Setup</p>
                </Link>
                <ul className="nav nav-treeview " >
                <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/settings/patient"><i class=" fas nav-icon text-xs fa-angle-right"></i> Patient</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/settings/pharmacy"><i class=" fas nav-icon text-xs fa-angle-right"></i> Pharmacy</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/settings/bed"><i class=" fas nav-icon text-xs fa-angle-right"></i> Bed</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/settings/frontOffice"><i class=" fas nav-icon text-xs fa-angle-right"></i> Front Office</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/settings/charges"><i class=" fas nav-icon text-xs fa-angle-right"></i> Charges</NavLink></li>            
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/settings/inventory"><i class=" fas nav-icon text-xs fa-angle-right"></i> Inventory</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/settings/humanResource"><i class=" fas nav-icon text-xs fa-angle-right"></i> Human Resource</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/settings/pathology"><i class=" fas nav-icon text-xs fa-angle-right"></i> Pathology</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/settings/radiology"><i class=" fas nav-icon text-xs fa-angle-right"></i> Radiology</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-xs text-capitalize " to="/admin/settings/finance"><i class=" fas nav-icon text-xs fa-angle-right"></i> Finance</NavLink></li>
                 
                    </ul>

                </li>
        </ul>
      </nav>
    </div>
  );
}

export default sidebaritem;
