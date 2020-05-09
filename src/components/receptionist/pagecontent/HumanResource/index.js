import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import StaffList from "./StaffList";
import Leave from "./Leave";

export default () => {
  return (
      <Switch>
 
  <Route path='/receptionist/humanResource/leaves' render={()=><Leave/>}/>
  <Route path='/receptionist/humanResource/staffList' render={()=><StaffList/>}/>
  
          <Route path='' render={()=><StaffList/>}/>
      </Switch>
      );
};
