import React from 'react'
import { Link } from 'react-router-dom';

export default function Forgotpassword() {
    return (
      <div className="modal fade"   id="forgotpassword" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog " role="document">
    <div className="modal-content rounded bg-transparent">
       

  {/* /.login-logo */}
  <div className="card m-0 rounded">
    <div className="card-body login-card-body">
    <button type="button " class="close " data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button> 
      <p className="login-box-msg mt-4">You forgot your password? Here you can easily retrieve a new password.</p>
      <form  method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="submit" className="btn btn-success btn-block">Request new password</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <p className="mt-3 mb-1">
      <Link  onClick={()=>{window.$('#forgotpassword').modal('hide');window.$('#login').modal('show')}}>Login</Link>
     </p>
     
    </div>
    </div>
    {/* /.login-card-body */}
  </div>
</div>
</div>


    )
}

