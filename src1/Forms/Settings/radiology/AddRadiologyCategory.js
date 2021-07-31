import React from 'react'
import { useFormik } from 'formik';
import { Postdata } from '../../../Network/Server';
export default function(props) {
  const formik=useFormik({
    enableReinitialize:true,
    initialValues:{
      ...props.data
    },
    onSubmit:values=>{

        Postdata('radiologyCategory/add','POST',values).then(res=>{
          console.log(res)
            if(values.id)
            props.setdataSrc(data=>data.map(item=>item.id==res.id?res:item))  
            else
            props.setdataSrc(data=>[res,...data])
            window.$('#radiologyCategory').modal('hide')
        })
      //props.setdataSrc(data=>data.map(item=>item.id==values.id?values:values.id?values))
   //    props.setdataSrc(data=>[...data,values])
       
    }
  })
      return (
  
        <div className="modal fade in" id="radiologyCategory" >
          <div className="modal-dialog modal-mid" role="document">
            <div className="modal-content modal-media-content">
              <div className="modal-header modal-media-header pb-1">
              <h6 className="box-title"> Add Radiology Category</h6> 
                <button type="button" className="close" data-dismiss="modal">×</button>
                
              </div>
              <form >
                <div className="modal-body pt0 pb0">  
                  <div className="ptt10">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"> Radiology Category</label><small className="req"> *</small>
                      <input autoComplete={'off'}    type="text" className="form-control" {...formik.getFieldProps('name')} />
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