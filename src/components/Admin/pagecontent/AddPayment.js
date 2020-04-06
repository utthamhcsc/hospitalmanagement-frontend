import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import * as  Yup from 'yup';
import {toast} from 'react-toastify'
export default (props) =>{
   return(
   
    <div className="card ">
        <div className="card-header bg-primary">Add Payment
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
        </div>
        
        <div className="card-body">
            <form >
                <div className="border bg-light">

                <div className="form-row p-2">

                
                
                <div className="form-group col-md-6">
                    <label for="source">Source</label>
                    <select id="input" className="form-control" name='source'  >
                        <option selected>Choose</option>
                        <option>Online Advertising</option>
                        <option>From Visitors</option>
                    </select>
                    <span className='text-danger'></span>
                </div>
            </div>
            </div>
            <div className="border bg-light mt-2">
                <div className="form-row p-2">
                    <div className="form-group col-md-6">
                        <label for="complainby">Amount($)</label>
                        <input type="text" className="form-control" id="complain" placeholder="" name='amount' />
                        <span className='text-danger'></span>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="complaintype">Payment Mode</label>
                    <select id="input" className="" name='paymentMode'>
                      <option selected>Choose</option>
                      <option>Food Quality</option>
                      <option>Hospital Services</option>
                    </select>
                    <span className='text-danger'></span>
                </div>
                    
                
                    
                </div>
                </div>
                <div className="border bg-light mt-2">
                <div className="form-row p-2">
                    <div class="form-group col-md-6">
                       <label for="inputState">Date</label>
                        <div className="w-100 ">
                           <DatePicker selected={formik.values.date} name='date' onChange={(e)=>formik.setFieldValue('date',e)}/>
                           
                        </div> 
                        <span className='text-danger'>{(formik.touched.date && formik.errors.date)?formik.errors.date:''}</span>
                    </div>  
                    <div className="form-group col-md-6">
                        <label for="choose">Attach Document</label>
                        <input type="file" class="form-group-input" id="inputGroupFile01" name='attachedDocument' onChange={(e)=>formik.setFieldValue('attachedDocument',e.target.files[0])}/>
                        <span className='text-danger'>{(formik.touched.attachedDocument && formik.errors.attachedDocument)?formik.errors.attachedDocument:''}</span>
                    </div> 
                    
                
                       
                </div>
                </div>

                

                <div className="border bg-light mt-2">
                <div className="form-row p-2">
                    <div className="form-group col-md-6">
                        <label for="note">Note</label>
                        <textarea className="form-control" row="2" name='note' ></textarea>
                        <span className='text-danger'></span>
                    </div>
                    
                
                    </div>
                    </div>
                <button type="submit" class="btn btn-primary mt-2 ">Save</button>
            </form>
        </div>
    </div>
         
    
)
}