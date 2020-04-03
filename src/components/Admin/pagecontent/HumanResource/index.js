import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import StaffList from "./StaffList";
import AddStaff from "./AddStaff";
import PayRoll from "./PayRoll";
import StaffAttendence from "./StaffAttendence";
import Leave from "./Leave";
import ApproveLeaveRequest from "./ApproveLeaveRequest";

export default () => {
  return (
      <Switch>
          <Route path='/admin/humanResource/addStaff/:staffId' render={()=><AddStaff/>}/>
  <Route path='/admin/humanResource/payroll' render={()=><PayRoll/>}/>
  <Route path='/admin/humanResource/staffAttendence' render={()=><StaffAttendence/>}/>
  <Route path='/admin/humanResource/leaves' render={()=><Leave/>}/>
  <Route path='/admin/humanResource/staffList' render={()=><StaffList/>}/>
  
  <Route path='/admin/humanResource/approveLeaveRequest' render={()=><ApproveLeaveRequest/>}/>

          <Route path='' render={()=><StaffList/>}/>
      </Switch>
      );
};
