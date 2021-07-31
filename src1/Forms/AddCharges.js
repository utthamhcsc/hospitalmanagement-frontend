import React from 'react'
import { useFormik } from 'formik'
import ReactDatePicker from 'react-datepicker'
import { Postdata } from '../Network/Server'
import * as  Yup from 'yup';
import { useParams } from 'react-router-dom'

export default (props)=> {
const {patientId}=useParams();
const formik=useFormik({
    initialValues:{
        opdId:props.patientId,
        chargeType:'',
        chargeCategory:'',
        description:'',
        code:'',
        standardCharge:'',
        date:new Date(),
        status:'',
        tpaCharge:'',
        appliedCharge:''
    },
    //enableReinitialize:'true',
    onSubmit:values=>{
        Postdata('charges/','POST',{...values,opdId:patientId}).then(data=>console.log(data))
    },

    validationSchema:Yup.object().shape({
               
        date:Yup.string().required('*Required Date'),
        chargeType:Yup.string().required('*Required Charge Type '),
        chargeCategory:Yup.string().required('*Required Charge Category'),
        
        //attachedDocument:null

        })
})




    return (
        <div class="modal fade in" id="add_chargeModal" role="dialog" aria-divledby="myModaldiv" aria-hidden="false" >
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content ">
            <div class="modal-header p-2 bg-primary">
            <div class="box-title text-sm"><b>Add Charges</b></div> 
                <button type="button" class="close" data-dismiss="modal">×</button>
               
            </div>
            <div class="modal-body pt0 pb0">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 paddlr">
                        <form id="add_charges" accept-charset="utf-8" method="post" class="ptt10">
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="form-group">
                                        <div>Date <small class="req"> *</small> </div>
                                       <ReactDatePicker className='form-control' selected={formik.values.date} onChange={(e)=>formik.setFieldValue('date',e)}/>
                                    </div>
                                    <span className='text-danger'>{(formik.touched.date && formik.errors.date)?formik.errors.date:''}</span>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group">
                                        <div>Charge Type<small class="req"> *</small> </div>

                                        <select name="charge_type" {...formik.getFieldProps('chargeType')} class="form-control">
                                            <option value="">Select</option>
                                                <option value="Procedures">Procedures                                                </option>
                                                <option value="Investigations">Investigations                                                </option>
                                                <option value="Supplier">Supplier                                                </option>
                                                <option value="Operation Theatre">Operation Theatre                                                </option>
                                                <option value="Others">Others                                                </option>
                                        </select>
                                        <span class="text-danger"></span>
                                    </div>
                                    <span className='text-danger'>{(formik.touched.chargeType && formik.errors.chargeType)?formik.errors.chargeType:''}</span>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group">
                                        <div>Charge Category<small class="req"> *</small> </div>

                                        <select name="charge_category" id="charge_category"  class="form-control w-100 select2 select2-hidden-accessible" {...formik.getFieldProps('chargeCategory')} tabindex="-1" aria-hidden="true">
                                            <option value="">Select</option>
                                            <option>Blood Pressure Check</option>
                                            <option>Eye Check</option>
                                            <option>General ward doctor visit</option>
                                            <option>VIP ward doctor visit</option>
                                            <option>ICU ward doctor visit</option>
                                            <option>NICU ward doctor visit</option>

                                        </select> 
                                        <span class="text-danger"></span>

                                    </div>
                                    <span className='text-danger'>{(formik.touched.chargeCategory && formik.errors.chargeCategory)?formik.errors.chargeCategory:''}</span>
                                </div>
                                <div class="col-sm-3">
                                    <div class="form-group">
                                        <div>Code<small class="req text-danger"> *</small> </div>

                                        <select name="code" id="code"  class="form-control w-100 select2 select2-hidden-accessible" {...formik.getFieldProps('code')} tabindex="-1" aria-hidden="true">
                                            <option value="">Select</option>
                                            <option>125-</option>

                                        </select>
                                        <span class="text-danger"></span>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group">
                                        <div>Standard Charge ($)</div>
                                        <input type="text" name="standard_charge" id="addstandard_charge" class="form-control" {...formik.getFieldProps('standardCharge')}/> 
                                        <input type="hidden" name="patient_id" value="13"/>
                                        <input type="hidden" name="charge_id" id="charge_id"/>
                                        <input type="hidden" name="org_id" id="org_id"/>
                                        <input type="hidden" name="opd_id" value="19"/> 
                                        <span class="text-danger"></span>
                                    </div>
                                </div> 
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <div>TPA Charge ($)</div>
                                        <input type="text" {...formik.getFieldProps('tpaCharge')} id="schedule_charge" placeholder="" class="form-control" />    
                                        <span class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <div>Applied Charge ($)<small class="req"> *</small></div>
                                        <input type="text" name="apply_charge" id="apply_charge" {...formik.getFieldProps('appliedCharge')} class="form-control"/>    
                                        <span class="text-danger"></span>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" id="add_chargesbtn" onClick={formik.handleSubmit} class="btn btn-primary pull-right">Save</button>
                        </form>
                    </div>
                </div>
            </div>    
        </div>
    </div> 
</div>   
    )
}
