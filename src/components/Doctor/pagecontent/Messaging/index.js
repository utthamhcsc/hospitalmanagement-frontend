import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NoticeBoard from './NoticeBoard'
import SendEmail from './SendEmail'
import AddNewMessage from './NewMessage'
import Sms from './Sms'

export default function index() {
    return (
        <Switch>
            <Route path='/doctor/messaging/newmessage' render={()=><AddNewMessage/>}/>
            <Route path='/doctor/messaging/noticeboard' render={()=><NoticeBoard/>}/>
            <Route path='/doctor/messaging/sendemail' render={()=><Sms/>}/>
            <Route path='' render={()=><NoticeBoard/>}/>
        </Switch>
    )
}
