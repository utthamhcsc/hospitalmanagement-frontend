import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from 'formik';
import * as  Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../Network/Server'

 import {toast} from 'react-toastify'
export default (props) =>{
   const [data,setData]=React.useState([]);
    const formik=useFormik({
        enableReinitialize:true,
        initialValues:props.data||{

            expenseHeadId:'',
            name:'',
            invoiceNumber:'',
            date:'',
            amount:'',
            attachDocument:'',
            description:'',
            file:''
            
       },
       onSubmit:values=>{console.log(JSON.stringify(values,null,2))
        console.log(JSON.stringify(values,null,2));
        PostFormdata('financeexpense/add','POST',{...values,date:new Date(values.date)=='Invalid Date'?'':new Date(values.date)}).then(
            data=>{
                console.log(data)
                if(values.id){
                    props.setdataSrc(item=>item.map(item1=>item1.id==data.id?{...item1,p:data}:item1))
                  }else{
                    props.setdataSrc(item=>[{p:data},...item])
                  
                  }
            window.$('#addexpense').modal('hide');

            }
        );
     
    },
         validationSchema:Yup.object().shape({

           // expenseHeadId:Yup.date().required('Required'),
           // name:Yup.date().required('Required'),
            date:Yup.date().required('Required'),
           // doctorName:Yup.string().required('required'),
            
            amount:Yup.string().required('Required'),
            
        })
     })
React.useEffect(()=>{
    
    Getdata('expenseHead/get').then(data=>{setData(data);console.log(data)})
    




},[])


    return(
        
        <div class="modal fade" id="addexpense" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
  <div class="modal-content" role="document">
  <div className="card  text-bold">
            
            <div className="card-body login-card-body">
            <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button> 
                  <h5 className="login-box-msg">Add Expense</h5> 
                <form onSubmit={formik.handleSubmit}>

                    <div className="form-row">
                        <div className="col-6">
                    <div>Expense Head<small className="req text-danger"> *</small>
                    <select id="input" className="form-control" value={formik.values.expenseHeadId} onChange={(e)=>formik.setFieldValue('expenseHeadId',e.target.value)} >
                        <option>Select</option>
                      {
                          (data||[]).map(item=><option value={item.id}>{item.expenseHead}</option>)
                      }
                    </select>
                    <span className='text-danger'>{(formik.touched.expenseHeadId && formik.errors.expenseHeadId)?formik.errors.expenseHeadId:''}</span>
                    </div>
                    </div>
                    
                    <div className="col-6">
                    <div className="ml-4">Name<small className="req text-danger"> *</small>
                        <input type="text" className="form-control" value={formik.values.name} onChange={(e)=>formik.setFieldValue('name',e.target.value)}/>
                        <span className='text-danger'>{(formik.touched.name && formik.errors.name)?formik.errors.name:''}</span>
                    </div>
                    </div>
                    </div>
                    
                    <div className="form-row mt-2">
                    <div className="col-6">
                    <div  className="mt-2">Invoice Number
                        <input type="text" className="form-control" value={formik.values.invoiceNumber} onChange={(e)=>formik.setFieldValue('invoiceNumber',e.target.value)}/>

                    </div>
                    </div>
                    <div className="col-6">

                    <div  className="ml-4 mt-2">Date<small className="req text-danger"> *</small>
                    <div className="w-100 ">
                     <DatePicker className="form-control"
                     minDate={new Date()}
                      selected={new Date(formik.values.date)=='Invalid Date'?'':new Date(formik.values.date)}  style={{width:'100% !important'}} 
                      onChange={(data)=>formik.setFieldValue('date',data)}/>
                    </div> 
                    <span className='text-danger'>{(formik.touched.date && formik.errors.date)?formik.errors.date:''}</span>          
                    </div>
                    </div>
            </div>
            <div className="form-row mt-2">
            <div className="col-6">
                    <div  className="mt-2">Amount($)<small className="req text-danger"> *</small>
                        <input type="number" className="form-control" value={formik.values.amount} onChange={(e)=>formik.setFieldValue('amount',e.target.value)} />
                        <span className='text-danger'>{(formik.touched.amount && formik.errors.amount)?formik.errors.amount:''}</span>

                    </div>
                    </div>

                    <div className="col-6">
                    <div  className="  mt-2 ml-4">Attach Document
                    <input type="file" className="form-control"
                    onChange={(e)=>formik.setFieldValue('file',e.target.files[0])}
                    />
                                
                    </div>
                    </div>

                    

                    
            </div>
            <div  className="mt-3">Description
                        <textarea id="input" className="form-control" rows="3"
                        {...formik.getFieldProps('description')}
                        />

                    </div>
            
                    
                             <div className="mt-3">
                            
                            
                             <button type="submit" class="btn btn-primary form-control">Save</button>
                            
                             </div>
                           
                      </form>
                 </div>
            </div>
            </div>
            </div>
        </div>
    )
}