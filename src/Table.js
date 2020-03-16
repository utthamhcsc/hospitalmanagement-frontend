import React,{useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import { Getdata } from './Network/Server';
export default (prop)=>{
  const [state, setstate] = useState({});
  const [column,setcolumn]=useState([{data:'name',title:'Name'},{data:'ipdId',title:'IPD No'},
  {data:'patientId',title:'patient Id'},{data:'gender',title:'Gender'},
  {data:'phone',title:'Phone'},{data:'action',title:'Action'}]);
 useEffect(async()=>{ 
  //  if(window.$.fn.DataTable.isDataTable("#example")){
  //   window.$(prop.id).DataTable().clear().destroy();
  //  }
  let state=[];
  await Getdata('inpatient').then(data=>state=data)
  
  let table=window.$(document).ready(function(){
    
  window.$.fn.dataTable.ext.errMode='none';
  window.$('#table').DataTable( {
    data:state,
    columns:column,
    columnDefs:[],
     dom: '<"d-sm-flex flex-row justify-content-between border-primary m-0 p-0"<"p-2"l><"text-center p-2"B><"p-2"f>>t<"d-sm-flex justify-content-between align-items-center p-2"ip>',
        buttons: [
            {
              extend:'copy',
              text:'COPY',
              className:'btn btn-primary py-0 btn-xs'
            }, 
              {
              extend:'csv',
              text:'CSV',
              className:'btn btn-primary btn-xs py-0'
            },   {
              extend:'excel',
              text:'EXCEL',
              className:'btn btn-primary btn-xs py-0'
            }, 
              {
              extend:'pdf',
              text:'PDF',
              className:'btn btn-primary btn-xs py-0'
            }
            ,   {
              extend:'print',
              text:'PRINT',
              className:'btn btn-primary btn-xs py-0 '
            }
        ],
     responsive:true
     
    

    } )});
    return ()=>{
      
    window.$('#table').DataTable().destroy();
    window.$('#table').empty();
    }
    
} 
 );

  return(

<>

<table id={'table'} className={`table table-striped table-bordered dt-responsive nowrap  `} style={{width:'100%'}}>
  <thead className='p-0 bg-primary'>
    <tr>
  {column.map(data=><th>{data.title}</th>)}
          </tr>
        </thead>
        <tbody>
            
          </tbody>
</table>

</>
  )
}