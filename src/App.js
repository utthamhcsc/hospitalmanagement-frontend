import React, { useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import MyRoute from './MyRoute';
function App() {
  
  useEffect(()=>{
  // alert(window.location)
//window.$('.choose').chosen()
const role=window.localStorage.getItem('role')

  },[])
  return (
    <BrowserRouter>
    <MyRoute/>       
    </BrowserRouter>
  );
}
const Demo=()=>{
 return <div className='wow bounceIn'>
    <h1>Hello</h1>
  </div>
}

export default App;
