import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './components/homepage/Header'
import Receptionist from './components/receptionist'

import Patient from './components/patient'
import './App.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
        <Route path='/receptionist' component={Receptionist}/>
        <Route path='/patient' component={Patient}/>
        <Route path='/' exact component={Header}/>
        <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
