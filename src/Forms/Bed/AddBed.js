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
       let bedType=JSON.parse(values.bedTypeId)||{}
       let bedGroup=JSON.parse(values.bedGroupId)||{}
        Postdata('bed/add','POST',{...values,bedTypeId:bedType.id,bedGroupId:bedGroup.id}).then(res=>{
          console.log(res)
            if(values.id)
            props.setdataSrc(data=>data.map(item=>item.id==res.id?{...res,bedTypeName:bedType.name,bedGroupName:bedGroup.name}:item))  
            else
            props.setdataSrc(data=>[{...res,bedTypeName:bedType.name,bedGroupName:bedGroup.name},...data])
            window.$('#bed').modal('hide')
        })
      //props.setdataSrc(data=>data.map(item=>item.id==values.id?values:values.id?values))
   //    props.setdataSrc(data=>[...data,values])
       
    }
  })
      return (
  
        <div className="modal fade in" id="bed" >
          <div className="modal-dialog modal-mid" role="document">
            <div className="modal-content modal-media-content">
              <div className="modal-header modal-media-header pb-1">
              <h6 className="box-title"> Add Bed </h6> 
                <button type="button" className="close" data-dismiss="modal">×</button>
                
              </div>
              <form >
                <div className="modal-body pt0 pb0">  
                  <div className="ptt10">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"> Name</label><small className="req"> *</small>
                      <input autoComplete={'off'}    type="text" className="form-control" {...formik.getFieldProps('name')} />
                      <span className="text-danger" />
                    </div>          
                  </div>
                  <div className="ptt10">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"> Bed Type</label><small className="req"> *</small>
                      
                      <select autoComplete={'off'}   type="text" className="form-control" {...formik.getFieldProps('bedTypeId')} >
                      <option value=''></option>
                      {
                          props.bedType?props.bedType.map(item=><option key={item.id} value={JSON.stringify(item)}>{item.name}</option>):''
                      }
                      </select>
                      <span className="text-danger" />
                    </div>          
                  </div>
                  <div className="ptt10">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"> Bed Group</label><small className="req"> *</small>
                      
                      <select autoComplete={'off'}   type="text" className="form-control" {...formik.getFieldProps('bedGroupId')} >
                      <option value=''></option>
                      {
                          props.bedGroup?props.bedGroup.map(item=><option key={item.id} value={JSON.stringify(item)}>{item.name}</option>):''
                      }
                      </select>
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