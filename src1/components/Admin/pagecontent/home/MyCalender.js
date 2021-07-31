import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
import timeGridPlugin from '@fullcalendar/timegrid'

import AddEvent from '../../../../Forms/calenderevents/AddEvent';

export default function MyCalender() {
  const [data,setData]=useState('')
const [event,setEvent]=useState([{
    
  title: 'BCH237',
    start: new Date(),
    end: new Date(),
    backgroundColor:'black',textColor:'white',
    description:'desc1',
    status:'public',
    userId:''
}])



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
    alert('Event: ' + info.event.start);}}
  events={event}
  plugins={[dayGridPlugin,interactionPlugin,timeGridPlugin]} />
  <AddEvent data={data} setEvent={setEvent}/>
  </>
  )
}
