import React from 'react'
import { useFormik } from 'formik';
import { Postdata } from '../../Network/Server';
export default function(props) {
  const formik=useFormik({
    enableReinitialize:true,
    initialValues:{
      ...props.data
    },
    onSubmit:values=>{

        console.log(values)
        Postdata('bloodstatus/add','POST',values).then(res=>{
            if(values.bloodGroup)
            props.setdataSrc(data=>data.map(item=>item.bloodGroup==res.bloodGroup?res:item))  
            else
            props.setdataSrc(data=>[res,...data])
            window.$('#bloodstatus').modal('hide')
        })
      // props.setdataSrc(data=>data.map(item=>item.id==values.id?values:values.id?values))
   //    props.setdataSrc(data=>[...data,values])
       
    }
  })
      return (
  
        <div className="modal fade in" id="bloodstatus" >
          <div className="modal-dialog modal-mid" role="document">
            <div className="modal-content modal-media-content">
              <div className="modal-header modal-media-header pb-1">
              <h6 className="box-title"> Edit Blood Status</h6> 
                <button type="button" className="close" data-dismiss="modal">×</button>
                
              </div>
              <form >
                <div className="modal-body pt0 pb0">  
                  <div className="ptt10">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"> Blood Group</label><small className="req"> *</small>
                      <input readOnly  type="text" className="form-control" {...formik.getFieldProps('bloodGroup')} />
                      <span className="text-danger" />
                    </div>          
                  </div>
                  <div className="ptt10">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"> status</label><small className="req"> *</small>
                      <input   type="text" className="form-control" {...formik.getFieldProps('status')} />
                      <span className="text-danger" />
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