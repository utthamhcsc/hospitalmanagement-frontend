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
                <NavLink className="nav-link py-1 text-white" to="/radiologist/radiology">
                    <i class="text-xs fas fa-microscope"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Radiology</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/radiologist/humanResource">
                    <i class="text-xs fas fa-sitemap"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Human Resource</p> 
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to= "/radiologist/messaging">
                    <i class = "text-xs fas fa-bullhorn"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Messaging</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <NavLink className="nav-link py-1 text-white" to="/radiologist/content">
                   <i class="text-xs fas fa-download"></i> 
                   <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Download Center</p>
                </NavLink>
            </li>
            <li className="nav-item has-treeview shadow p-1">
                <Link className="nav-link py-1 text-white" >
                    <i class="text-xs fas fa-line-chart"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>Reports <i class="fa fa-angle-left right"></i></p> 
                 </Link>
                <ul className="nav nav-treeview text-dark bg-light">
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/radiologist/records/radiologyreport"><i class="text-xs fas fa-angle-right"></i> Radiology Patient Report</NavLink></li>
                   
                   </ul> 
            </li>
            <li className="nav-item has-treeview shadow p-1" >
                <Link className="nav-link py-1 text-white">
                    <i class="text-xs fas fa-cogs"></i> 
                    <p className='pl-3 ' style={{letterSpacing:'1px',fontSize:'13px',lineHeight:'100%'}}>
                        <i class="fa fa-angle-left right"></i>Setup</p>
                </Link>
                <ul className="nav nav-treeview text-dark bg-light" style={{zIndex:-999}}>
                    <li className="nav-item"><NavLink className="nav-link py-1 text-dark" to="/radiologist/settings/radiology"><i class="text-xs fas fa-angle-right"></i> Radiology</NavLink></li>
                  
                    </ul>

                </li>
        </ul>
      </nav>
    </div>
  );
}

export default sidebaritem;
