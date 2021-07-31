import React from 'react'
import BarChart from './charts/BarChart'
import { Doughnut } from 'react-chartjs-2'
import DoughnutChart from './charts/DoughnutChart'

export default function Charts() {
    return (
<div className="row">
  <div className="col-lg-6 col-md-6 col-sm-12 col60">
  <div className="card  ">
  <div className="card-header border-0 ui-sortable-handle" style={{cursor: 'move'}}>
    <h3 className="card-title">
     
      Yearly Income And Expense
    </h3>
    {/* card tools */}
    <div className="card-tools">
      
      <button type="button" className="btn  btn-sm" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
        <i className="fas fa-minus" />
      </button>
    </div>
    {/* /.card-tools */}
  </div>
  <div className="card-body" >
   <BarChart/>
   
   </div>
  {/* /.card-body*/}
 
</div>

     </div>{/*./col-lg-5*/}
     <div className="col-lg-6 col-md-6 col-sm-12 col60">
  <div className="card  ">
  <div className="card-header border-0 ui-sortable-handle" style={{cursor: 'move'}}>
    <h3 className="card-title">
      
      Yearly Income And Expense
    </h3>
    {/* card tools */}
    <div className="card-tools">
      
      <button type="button" className="btn  btn-sm" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
        <i className="fas fa-minus" />
      </button>
    </div>
    {/* /.card-tools */}
  </div>
  <div className="card-body" >
   <DoughnutChart/>
   
   </div>
  {/* /.card-body*/}
 
</div>

     </div>{/*./col-lg-5*/}
  
</div>

    )
}
