import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import BookMyAppointment from './BookMyAppointment';
import Login from './Login';
import Navbar from './Navbar';
import Carosal from './Carosal';
import About from './About'
import Services from './Services';
import Department from './Department';
import Doctors from './Doctors';
import Contact from './Contact';
import Footer from './footer';

export default (prop)=>
<BrowserRouter>
<div class="position-fixed d-flex flex-column vw-100 bg-dark p-0 m-0 " style={{zIndex:1,minWidth:100+'vw'}}>
{
//   < div className='pr-5 d-flex justify-content-between bg-dark text-white p-0 ' style={{backgroundColor:'#dfdfdf'}}>
// <div className='d-flex align-items-center'>
//    <div className='px-4'><i className='fa fa-mobile mx-1'></i>8960683822</div>
//    <div className='px-4'><i className='fa fa-envelope-o mx-1'></i>email@gmail.com</div>
// </div>
}
<div className='container d-md-flex  ml-auto justify-content-end'>
<button type="button" className="btn btn-outline-light btn-sm mr-2 " data-toggle="modal" data-target="#bookappointment">
 Book Appointment </button>
<button type="button" className="btn btn-outline-light btn-sm " data-toggle="modal" data-target="#login">
 Login
</button>
</div>


<Navbar />
</div>

<BookMyAppointment />
<Login />
<Carosal />
<About />
<Services />
<Department />
<Doctors />
<Contact />
<Footer />

</BrowserRouter>