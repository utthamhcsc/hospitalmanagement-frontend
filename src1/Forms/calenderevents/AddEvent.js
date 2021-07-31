import React from 'react'
import { useFormik } from 'formik';
import { Postdata } from '../../Network/Server';
import ReactDatePicker from 'react-datepicker';
export default function(props) {
  const formik=useFormik({
    enableReinitialize:true,
    initialValues:{
        start:'',
        end:'',
        description:'',
        title:'',
        backgroundColor:'',
        status:'public',
        userId:window.localStorage.getItem('userId')
      
    },
    onSubmit:values=>{

        Postdata('calenderEvent/add','POST',values).then(item=>{
          if(values.id){
          props.setEvent(data=>{
            console.log([...data,item])
            return [...data,item]})
          }
          else{
            props.setEvent(data=>{
              console.log([...data,item])
              return [...data,item]})
          }
          window.$('#event').modal('hide')
        })
     
      // props.setdataSrc(data=>data.map(item=>item.id==values.id?values:values.id?values))
   //    props.setdataSrc(data=>[...data,values])
       
    }
  })
      return (
  
        <div className="modal fade in" id="event" >
          <div className="modal-dialog modal-mid" role="document">
            <div className="modal-content modal-media-content">
              <div className="modal-header modal-media-header pb-1">
              <h6 className="box-title"> Add Event</h6> 
                <button type="button" className="close" data-dismiss="modal">×</button>
                
              </div>
              <form >
                <div className="modal-body ">  
                  <div className="ptt10">
                    <div className="form-group ">
                      <label htmlFor="exampleInputEmail1">Add event</label><small className="req"> *</small>
                      <input   type="text" className="form-control" {...formik.getFieldProps('title')} />
                      <span className="text-danger" />
                    </div>          
                  </div>
                  <div className="ptt10">
                    <div className="form-group ">
                      <label htmlFor="exampleInputEmail1"> desc</label><small className="req"> *</small>
                      <input   type="text" className="form-control" {...formik.getFieldProps('description')} />
                      <span className="text-danger" />
                    </div>          
                  </div>
                  <div className="ptt10">
                    <div className="form-group ">
                      <label htmlFor="exampleInputEmail1"> backgroundColor</label><small className="req"> *</small>
                      <input type='color' className='form-control' value={formik.values.backgroundColor} onChange={e=>formik.setFieldValue('backgroundColor',e.target.value)}/>
                      <span className="text-danger" />
                    </div>          
                  </div>
                
                  <div className="ptt10">
                    <div className="form-group ">
                      <label htmlFor="exampleInputEmail1"> start</label><small className="req"> *</small>
                      <ReactDatePicker className='form-control' selected={new Date(formik.values.start)=='Invalid Date'?'':new Date(formik.values.start)} 
                      onChange={e=>formik.setFieldValue('start',e.toJSON())}/>
                      <span className="text-danger" />
                    </div>          
                  </div>
                  <div className="ptt10">
                    <div className="form-group ">
                      <label htmlFor="exampleInputEmail1"> End</label><small className="req"> *</small>
                      <ReactDatePicker className='form-control' 
                      selected={new Date(formik.values.end)=='Invalid Date'?'':new Date(formik.values.end)} 
                      onChange={e=>formik.setFieldValue('end',e.toJSON())}/>
                      <span className="text-danger" />
                    </div>          
                  </div>
                  <div className="my-2 text-bold">
                <small className="text-danger"> *</small>
                <div className="ml-2 custom-control custom-radio custom-control-inline ">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="email"
                    onClick={(e) =>
                      formik.setFieldValue(
                        "status",
                        'public'
                      )
                    }
                    checked={formik.values.status=='public'}
                  />
                  <label class="custom-control-label" for="email">
                    Public
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="sms"
                    onChange={(e) =>
                     { formik.setFieldValue("status", 'private')
                  
                    }
                    }
                    checked={formik.values.status=='private'}
                  />
                  <label class="custom-control-label" for="sms">
                    Private
                  </label>
                </div>
              </div>
           
                </div>{/*./modal-body*/}        
                <div className="box-footer">
                  <button type="submit" id="formaddbtn" onClick={formik.handleSubmit} className="btn btn-primary pull-right">Save</button>
                </div>
              </form>
            </div>{/*./row*/} 
          </div>
        </div>
      );
    }