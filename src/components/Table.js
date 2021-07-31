import React,{useEffect} from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
export default (prop)=>{
  
 useEffect(()=>{ 
  //  if(window.$.fn.DataTable.isDataTable("#example")){
  //   window.$(prop.id).DataTable().clear().destroy();
  //  }
  
  let table=window.$(document).ready(function(){
       
    window.$('#'+prop.id).DataTable().destroy();
    window.$('#'+prop.id).empty();
   
  window.$.fn.dataTable.ext.errMode='none';
  window.$('#'+prop.id).DataTable( {
    
    data:prop.dataSrc,
    columns:prop.col,
    columnDefs:prop.columnDefs,
    scrollX: true,
     dom: '<"d-sm-flex flex-row justify-content-between align-items-center border-primary m-0 p-0"<l><"text-center mb-3"B><f>>t<"d-sm-flex justify-content-between align-items-center p-2"ip>',
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
    
     
    

    } )});
    return ()=>{
    }
    
} ,[prop.dataSrc]
 );

  return(

<div >

<table id={prop.id} className={`table  table-hover text-xs text-capitalize text-nowrap text-left over-flow-auto`} style={{width:'100%'}}>
  <thead className=''>
           {<tr>
                {prop.col.map(
                    (name)=>{
                    return <td className=''>{name.title}</td>
                    }
                )}
            </tr>}
        </thead>
        <tbody>
            
          </tbody>
</table>

</div>
  )
}