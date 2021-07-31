import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
import timeGridPlugin from '@fullcalendar/timegrid'

import AddEvent from '../../../../Forms/calenderevents/AddEvent';
import { Getdata } from '../../../../Network/Server';

export default function MyCalender() {
  const [data,setData]=useState('')
const [event,setEvent]=useState([])


React.useEffect(()=>{
  Getdata('calenderEvent/getByUser/'+window.localStorage.getItem('userId')).then(data=>{
    console.log(data)
    if(data){
      setEvent(data)
    }
  })
},[])
  return (
    <>
  <FullCalendar dateClick={(info)=>{
    setData(info)
    window.$('#event').modal('show')
  }}  header={{
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,dayGridDay'
  }} 
  
  eventClick={function(info) {
    setData(info.event);
    window.$('#event').modal('show')
  }}
  events={event}
  plugins={[dayGridPlugin,interactionPlugin,timeGridPlugin]} />
  <AddEvent data={data} setEvent={setEvent}/>
  </>
  )
}
