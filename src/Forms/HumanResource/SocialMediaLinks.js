import React from 'react'

export default function SocialMediaLinks() {
    return (
        <div class="card-body collapse fade" id='socialmedia'>
          <div className="row around10">
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Facebook URL</label>
      <input id="bank_account_no" name="facebook" placeholder type="text" className="form-control" defaultValue />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Twitter URL</label>
      <input id="bank_account_no" name="twitter" placeholder type="text" className="form-control" defaultValue />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Linkedin URL</label>
      <input id="bank_name" name="linkedin" placeholder type="text" className="form-control" defaultValue />
      <span className="text-danger" />
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Instagram URL</label>
      <input id="instagram" name="instagram" placeholder type="text" className="form-control" defaultValue />
    </div>
  </div>
</div>

        </div>
    )
}
