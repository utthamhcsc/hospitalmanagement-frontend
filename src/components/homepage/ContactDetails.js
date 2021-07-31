import React from 'react';
export default () =>
<React.Fragment>
  <div className='d-flex flex-column align-items-start pl-md-5 bg-success rounded elevation-1 pt-5'> 
    <ul className='list-group pt-4'>
      <li className='list-group-item border-white  bg-success'>
       <div className='h5'><i className='fa fa-map-marker mr-3'></i>Hospital Address</div>
        <li className='list-group-item border-0 py-1 mx-3 bg-success'>
        <li className='list-group-item border-0 py-1 px-0 m-0 text-sm bg-success'>Banglore, India SP Infocity, Block B,</li>
        <li className='list-group-item border-0 py-1 px-0 m-0 text-sm bg-success'>40 MGR Road, Banglore 600 096.</li>
      </li> 
    </li>

<li className='list-group-item border-white bg-success mt-3 rounded'>
<div className='h5'> <i className='fas fa-mobile mr-3 bg-success'></i>Mobile Number</div>
  <li className='list-group-item border-0 py-1 mx-3 text-sm bg-success'>+91 9865432210</li>
 <li className='list-group-item border-0 py-1 mx-3 text-sm bg-success'>+91 9876543452</li>
 </li>

<li className='list-group-item border-white bg-success mt-3 rounded'>
<div className='h5'> <i className='fa fa-envelope mr-3 bg-success'></i>Email Address</div>
<li className='list-group-item border-0 py-1 mx-3 text-sm bg-success'>pramod@gmail.com</li>
<li className='list-group-item border-0 py-1 mx-3 text-sm bg-success'>email@gmail.com</li>
</li>
</ul>

<div className='py-4'>
<div className='h3'>Follow Us On </div>
<div className=' py-2 mx-2 btn-group'>
<i className='fa fa-google mr-4 btn btn-danger'></i>
<i className='fa fa-twitter mr-4 btn bg-warning'></i>
<i className='fa fa-facebook mr-4 btn btn-primary'></i>
<i className='fa fa-instagram mr-4 btn btn-danger'></i>
</div>
</div>
</div>
</React.Fragment>