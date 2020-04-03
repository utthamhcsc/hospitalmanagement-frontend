import React from 'react'

export default function SocialMediaLinks(props) {
    return (
        <div class="card-body collapse fade" id='socialmedia'>
          <div className="row around10">
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Facebook URL</label>
      <input {...props.formik.getFieldProps('facebookUrl')} className="form-control"  />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Twitter URL</label>
      <input {...props.formik.getFieldProps('twitterUrl')} className="form-control"  />
      <span className="text-danger" />
    </div> 
  </div>
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Linkedin URL</label>
      <input {...props.formik.getFieldProps('linkedInUrl')} className="form-control"  />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Instagram URL</label>
      <input {...props.formik.getFieldProps('instagramUrl')} type="text" className="form-control"  />
    </div>
  </div>
</div>

        </div>
    )
}
