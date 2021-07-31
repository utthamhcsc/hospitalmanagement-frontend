import React from 'react';
export default () =>
<React.Fragment>
<div className=" py-2  px-4 bg-success rounded elevation-1">
<h3 className='font-weight-bold text-capitalize p-0 pt-3 border-bottom'>send us a message</h3>
<div className='pb-3'>you can contact us with anything to our hospital.Regarding any queries and feedback</div>
<form >
 <div className="form group">
    <label for="Yourname">Your Name</label>
   <div class="input-group flex-nowrap">
  <div class="input-group-prepend">
    <span class="input-group-text bg-white" id="addon-wrapping"><i className='fa fa-user'></i></span>
  </div>
    <input type="text" className="form-control border-left-0 px-0" id="Yourname" aria-describedby="emailHelp" placeholder="Your name" />
  </div>
  </div>
 
  <div className="form-group pt-3">
    <label for="Email">Email address</label>
    <div class="input-group flex-nowrap">
  <div class="input-group-prepend">
    <span class="input-group-text bg-white" id="addon-wrapping"><i className='fa fa-envelope'></i></span>
  </div>
    <input type="email" className="form-control border-left-0 px-0" id="Email" aria-describedby="emailHelp" placeholder="Email Address"/>
    </div>
  </div>
  <div className="form-group">
    <label for="mobileno">Mobile No</label>
    <div class="input-group flex-nowrap">
  <div class="input-group-prepend">
    <span class="input-group-text bg-white" id="addon-wrapping"><i className='fa fa-mobile'></i></span>
  </div>
    <input type="text" className="form-control border-left-0 px-0" id="mobileno" placeholder="MobileNo" />
    </div>
  </div>
  <div className="form-group">
    <label for="Message">Your Message</label>
    <textarea className="form-control"  id="Message" rows="4" placeholder="Your message" />
  </div>
  <button type="submit" className="btn btn-primary btn-small">Contact Us</button>

</form>
</div>
</React.Fragment>