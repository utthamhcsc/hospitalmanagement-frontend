import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './components/homepage/Header'
import Receptionist from './components/receptionist'

import Pharmasist from './components/Pharmacist'
import Patient from './components/patient'
import Doctor from './components/Doctor'
import Admin from './components/Admin'
import Table from './Table'

import './App.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
        <Route path='/receptionist' component={Receptionist}/>
        <Route path='/pharmacist' component={Pharmasist}/>
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
