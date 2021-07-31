import React from 'react'
import Cards from './Cards'
import Charts from './Charts'
import MyCalender from './MyCalender'
import StaffCards from './StaffCards'

export default function index() {
    return (
        <>
<Cards/>
<Charts/>
<div className="row">
    <div className="col-sm-9">
    <div className="card  ">
  <div className="card-header border-0 ui-sortable-handle" style={{cursor: 'move'}}>
    <h3 className="card-title">
      
      Calender
    </h3>
    {/* card tools */}
    <div className="card-tools">
      
      <button type="button" className="btn  btn-sm" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
        <i className="fas fa-plus" />
      </button>
    </div>
    {/* /.card-tools */}
  </div>
  <div className="card-body" >
   <MyCalender/>
   
   </div>
  {/* /.card-body*/}
 
</div>

    </div>
    <div className='col-sm-3'>
        <StaffCards/>
    </div>
</div>
        </>
    )
}
