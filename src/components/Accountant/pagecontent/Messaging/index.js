import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NoticeBoard from './NoticeBoard'
import SendEmail from './SendEmail'
import AddNewMessage from './NewMessage'
import Sms from './Sms'

export default function index() {
    return (
        <Switch>
            <Route path='/accountant/messaging/newmessage' render={()=><AddNewMessage/>}/>
            <Route path='/accountant/messaging/noticeboard' render={()=><NoticeBoard/>}/>
            <Route path='/accountant/messaging/sendemail' render={()=><Sms/>}/>
            <Route path='' render={()=><NoticeBoard/>}/>
        </Switch>
    )
}
