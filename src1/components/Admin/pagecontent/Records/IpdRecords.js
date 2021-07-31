import React from 'react'
import ReactDOM from 'react-dom'
import ReactDatePicker from 'react-datepicker'
import { BrowserRouter } from 'react-router-dom';
import Table from '../../../Table';
import { Getdata, PostFormdata,Postdata } from '../../../../Network/Server';
import filter from './FilterData'
import { useFormik } from 'formik';
import ViewBill from '../../../../Forms/Pharmacy/ViewBill';
import DisplayForm from '../../../../Forms/DisplayForm';
import RecordsTable from './RecordsTable';
export default ()=> {
    const [data,setData]=React.useState({});
    const [index1,setindex1]=React.useState({});
  const formik=useFormik({
      initialValues:{
          type:'all',
          fromDate:new Date(),
          toDate:new Date(),
          doctorId:'',
          status:'all'
      },
      onSubmit:v=>{
          console.log(v)
          if(v.type=='all'){
              if(v.doctorId==''){
                if(v.status=='all'){
                    Getdata('myIpd/getall').then(data=>{setdataSrc(data);
                        console.log(data)
                        });
                }else{
                    Getdata('myIpd/getall/status/'+v.status).then(data=>{setdataSrc(data);
                        console.log(data)
                        });
                }
                
            }
                else{
                    if(v.status=='all'){
                        Getdata('myIpd/getall/doctor/'+v.doctorId).then(data=>{setdataSrc(data);
                            console.log(data)
                            });
                    }
                    else{
                        Getdata('myIpd/getall/doctorstatus/'+v.doctorId+'/'+v.status).then(data=>{setdataSrc(data);
                            console.log(data)
                            });
                    }

                  
              
                }
          }
          else{
            PostFormdata('myIpd/getall','POST',{doctorId:v.doctorId||'empty',fromDate:v.fromDate.toJSON(),toDate:v.toDate.toJSON(),status:v.status}).then(data=>{setdataSrc(data);
                console.log(data)
                });
          }
      }
  })
const [show,setshow]=React.useState(false)
const [index,setindex]=React.useState({});
    const column=[{data:'ipd.admissionDate',title:'Date',render:(data,type,row,meta)=>new Date(data)=='Invalid Date'?'':new Date(data).toLocaleDateString()},
    {data:'ipd.ipdId',title:'Ipd No'},
    {data:'ipd.patientId',title:'Patient Id'},
    {data:'name',title:'Patient Name'},
    {data:'gender',title:'Gender'},
    {data:'phone',title:'Phone'},
    {data:'ipd.casuality',title:'Casualty'},
    {data:'ipd.reference',title:'Reference'},
    {data:'doctorName',title:'Consultant'},
    {data:'ipd.status',title:'Patient Status',render:(data,type,row,meta)=>data=='YES'?'Discharged':'On Bed'},
    {data:'charge',title:'Charge'},
    {data:'ipd.paymentMode',title:'Payment Mode',render:(data,type,row,meta)=>'cash'},
    {data:'ipd.amount',title:'Amount'}


]
    const [dataSrc,setdataSrc]=React.useState([]);
  const columnDefs=[]
  
React.useEffect(()=>{
    Getdata("fetchalluser/doctor").then(data => {
        setData(data);
        console.log(data);
      });
},[])

const change=(val)=>{
    val=val.target.value;
    formik.setFieldValue('type',val);
if(val=='period'){
    setshow(true)
}
else{
    setshow(false)
const {fromDate,toDate}=filter(val)
formik.setValues({...formik.values,fromDate,toDate,type:val})
}
}

    return (
        <>
        <div className='row bg-primary p-2 px-3'>
             Ipd Patient Report
        </div>
        <div className='row border py-2'>
           <div className="col-md-2">
               <div className="form-group ">
                   <label htmlFor="id1">Search Type</label>
                   <select id="id1" style={{ width: "100%",padding:'2px' }} onChange={change}>
                   <option value="all">All</option>
                                                                                    <option value="today">Today</option>
                                                                                            <option value="this_week">This Week</option>
                                                                                            <option value="last_week">Last Week</option>
                                                                                            <option value="this_month" selected="">This Month</option>
                                                                                            <option value="last_month">Last Month</option>
                                                                                            <option value="last_3_month">Last 3 Months</option>
                                                                                            <option value="last_6_month">Last 6 Months</option>
                                                                                            <option value="last_12_month">Last 12 Months</option>
                                                                                            <option value="this_year">This Year</option>
                                                                                            <option value="last_year">Last Year</option>
                                                                                            <option value="period">Period</option>
                            
                   </select>
                          </div>
           </div>
           <div className="col-md-2">
               <div className="form-group ">
                   <label htmlFor="id1">Select Doctor</label>
                   <select id="id1" style={{ width: "100%",padding:'2px' }} onChange={e=>formik.setFieldValue('doctorId',e.target.value)}>
                   <option value=''>select </option>
                   {
                   data?  Object.keys(data).map(item=><option value={item}>{data[item]}</option>):''
                 }
                   </select>
                          </div>
           </div>
           <div className="col-md-2">
               <div className="form-group ">
                   <label htmlFor="id1">Patient Status</label>
                   <select id="id1" style={{ width: "100%",padding:'2px' }} {...formik.getFieldProps('status')}>
                   <option value="all">All</option>
                   <option value="NO">On Bed</option>
                   <option value="YES">Discharged</option>                             
                   </select>
                          </div>
           </div>
           {
               show?
               <>
           <div className="col-md-2">
           <div className="form-group ">
                   <label htmlFor="id1">Date From</label>
                   <ReactDatePicker 
                   selected={new Date(formik.values.fromDate)=='Invalid Date'?'':new Date(formik.values.fromDate)}
                   onChange={e=>formik.setFieldValue('fromDate',e)}
                   showMonthDropdown showYearDropdown className='w-100'/>
               </div>
               </div>
               <div className="col-md-2">
               <div className="form-group ">
                   <label htmlFor="id1">Date To</label>
                   <ReactDatePicker
                   selected={new Date(formik.values.toDate)=='Invalid Date'?'':new Date(formik.values.toDate)}
                   
                   onChange={e=>formik.setFieldValue('toDate',e)}
                   showMonthDropdown showYearDropdown className='w-100'/>
               </div>
               </div>
              </>:''
}
<div className='col-md-12 text-right px-2'>
               <button 
               onClick={formik.handleSubmit}
               className="btn btn-primary btn-xs " type="button"><i class="fa fa-search" aria-hidden="true"></i> search</button>
           </div>
           </div>
           <div className='row'>
               <div className="col-md-12 border border-top-0 py-3">
               <RecordsTable id='pharmacyBill' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
               <DisplayForm data={index}/>
               </div>
           </div>
        </>
    )
}
