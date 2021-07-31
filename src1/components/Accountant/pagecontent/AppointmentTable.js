import React,{useEffect} from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
export default (prop)=>{
 useEffect(()=>{ 
  //  if(window.$.fn.DataTable.isDataTable("#example")){
  //   window.$(prop.id).DataTable().clear().destroy();
  //  }
  
  let table=window.$(document).ready(function(){
    
  window.$.fn.dataTable.ext.errMode='none';
  window.$('#'+prop.id).DataTable( {
    data:prop.dataSrc,
    columns:prop.col,
    columnDefs:prop.columnDefs,
     dom: '<"d-sm-flex flex-row justify-content-between border-primary m-0 p-0"<l><"btn-group"B><f>>t<"d-sm-flex justify-content-between align-items-center p-2"ip>',
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
      
    window.$('#'+prop.id).DataTable().destroy();
    window.$('#'+prop.id).empty();
    }
    
} ,[prop.dataSrc]
 );

  return(

<>

<table id={prop.id} className={`table table-striped table-bordered dt-responsive nowrap  `} style={{width:'100%'}}>
  <thead className='p-0 bg-primary'>
           {<tr>
                {prop.col.map(
                    (name)=>{
                    return <th className='text-sm p-2 text-center'>{name.title}</th>
                    }
                )}
            </tr>}
        </thead>
        <tbody>
            
          </tbody>
</table>

</>
  )
}