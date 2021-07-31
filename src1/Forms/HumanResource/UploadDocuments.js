import React from 'react'

export default function UploadDocuments(props) {
    return (
        <div class="card-body collapse fade" id='uploadDocuments'>
            <div className='row'>
                <div className='col-md-6'>
                    
                <div className='custom-file'>
               
                        <input type='file' onChange={(e)=>props.formik.setFieldValue('resumeFile',e.target.files[0])} className='custom-file-input'/>
                        <label className='custom-file-label'>Upload Resume</label>
                        </div>
                   
                    </div>
                    <div className='col-md-6'>
                    
                    <div className='custom-file'>
                        
                        <input type='file' onChange={(e)=>props.formik.setFieldValue('joiningletterFile',e.target.files[0])} className='custom-file-input'/>
                        <label className='custom-file-label'>Upload Joining Letter</label>
                        </div>
                   
                    </div>

                    <div className='col-md-6 my-2'>
                   
                    <div className='custom-file'>
                        
                        <input type='file' onChange={(e)=>props.formik.setFieldValue('otherDocumentFile',e.target.files[0])} className='custom-file-input'/>
                        <label className='custom-file-label'> Upload Other Document</label>
                        </div>
                    </div>

            </div>
        </div>
    )
}
