import React from 'react'
import SendGroup from './SendGroup'
import SendIndividual from './SendIndividual'

export default function Sms() {
    return (
<div className="row">           
  <div className="col-md-12">
    {/* Custom Tabs (Pulled to the right) */}
    <div className="nav-tabs-custom">
    <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Notice Board</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <ul className="nav nav-tabs  border-0">
       
        <li><button data-target="#tab_perticular" className='btn btn-xs  btn-light ml-1 ' data-toggle="tab">Individual</button></li>
        <li><button data-target="#tab_group" className='btn btn-xs  btn-light ml-1 ' data-toggle="tab">Group</button></li>
      </ul>
                
  </div>
  </li>
  </ol>
  </nav>
     
      <div className="tab-content">
        <SendGroup/>
        {/* /.tab-pane */}
        <SendIndividual/>
             </div>
    </div>
  </div>
</div>

    )
}
