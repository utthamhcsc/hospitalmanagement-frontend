import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Visits(Props) {
    return (
        <div className="container-fluid">
            {/* start row */}
            <div className="row">
                <div className="col-sm-2 text-center">
                    <img className="img-thumbnail" height='150' width='150' src="dist/img/user2-160x160.jpg" alt="no img" />
                <div className="btn-group align-items-center" role="group" aria-label="Button group">
                <button className="btn btn-sm " type="button"><span className='fa fa-reorder'></span></button>
                <button className="btn btn-sm " type="button"><span className='fa fa-pencil'></span></button>
                <button className="btn btn-sm " type="button"><span className='fa fa-trash'></span></button>
               
                </div>
                
                </div>
                {/* patient detais */}
                <div className="col-sm-5">
                    <div className="d-flex flex-row justify-content-between">
                        <h6>Name</h6>
    <div>{'rama'}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <h6>Gender</h6>
    <div>{'rama'}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <h6>Phone</h6>
    <div>{'rama'}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <h6>Patient Id</h6>
    <div>{'rama'}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <h6>Admission date</h6>
    <div>{'rama'}</div>
                    </div>
                </div>

                <div className="col-sm-5">
                <div className="d-flex flex-row justify-content-between">
                        <h6>Guardian Name</h6>
    <div>{'rama'}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <h6>Age</h6>
    <div>{'rama'}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <h6>Credit Limit</h6>
    <div>{'rama'}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <h6>Ipd No </h6>
    <div>{'rama'}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                        <h6>Bed</h6>
    <div>{'rama'}</div>
                    </div>
                </div>
                {/* end patient */}
            </div>
            {/* end row */}
             {/* nav bar */ }
             <hr className='m-0'/>
    <nav className="nav m-0 p-0">
        <li className="nav-item">
            <NavLink activeStyle={{borderBottom:'3px solid blue'}} className="nav-link active border-right" activeStyle={{borderBottom:'3px solid blue'}}  to="#">Item 1</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link disabled border-right" to="#" tabindex="-1" aria-disabled="true">Item 2</NavLink>
        </li>
    </nav>
    <hr className='m-0'/>
        </div>
   
       
    )
}
