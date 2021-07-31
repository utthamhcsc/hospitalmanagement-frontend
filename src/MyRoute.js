import React, { useEffect } from 'react';
import {Switch,Route, useHistory, Redirect, useLocation} from 'react-router-dom'
import Header from './components/homepage/Header'
import Receptionist from './components/receptionist'
import Patient from './components/patient'
import Doctor from './components/Doctor'
import Admin from './components/Admin'
import Pathology from './components/Pathologist'
import Radiology from './components/Radiologist'
import Finance from './components/Accountant'
import Table from './Table'
import Pharmacist from './components/Pharmacist'
import './App.css';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

 function MyRoute() {
     const [set,myset]=useState(false)
  const {pathname}=useLocation();
  const history=useHistory();
  useEffect(()=>{
      
const role=window.localStorage.getItem('role')
if(role && window.localStorage.getItem('userId')){
    myset(true)
const mypath=pathname.split('/')
if(mypath.length>1){
mypath[1]=role
//history.push(mypath.join('/'))
}else{//history.push('/'+role)

}
}
else{
   // history.push('/');
}
 
//window.$('.choose').chosen()


  },[pathname])
  return (
    <>
     
     
    <Route path='/pathologist' component={Pathology}/>
    <Route path='/radiologist' component={Radiology}/>
    <Route path='/accountant' component={Finance}/>
        <Route path='/receptionist' component={Receptionist}/>
         <Route path='/pharmacist' component={Pharmacist}/>
        <Route path='/patient' component={Patient}/> 
        <Route path='/doctor' component={Doctor}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/' exact component={Header}/>
        <Route path='/table' component={Table}/>
        
        <ToastContainer/>
       
</>   
  );
}
const Demo=()=>{
 return <div className='wow bounceIn'>
    <h1>Hello</h1>
  </div>
}

export default MyRoute;
