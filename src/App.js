import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './components/homepage/Header'
import Receptionist from './components/Receptionist'
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

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
