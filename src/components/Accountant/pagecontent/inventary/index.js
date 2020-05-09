import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemStock from "./ItemStock";
import IssueItem from "./IssueItem";

export default () => {
  return (
      <Switch>
  
  <Route path='/admin/itemstock/itemissue' render={()=><IssueItem/>}/>
  <Route path='/admin/itemstock/itemlist' render={()=><ItemList/>}/>
          <Route path='' render={()=><ItemStock/>}/>
      </Switch>
      );
};
