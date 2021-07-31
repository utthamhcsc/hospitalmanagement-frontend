import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NoticeBoard from './NoticeBoard'
import SendEmail from './SendEmail'
import AddNewMessage from './NewMessage'
import Sms from './Sms'

export default function index() {
    return (
        <Switch>
            <Route path='/pathologist/messaging/newmessage' render={()=><AddNewMessage/>}/>
            <Route path='/pathologist/messaging/noticeboard' render={()=><NoticeBoard/>}/>
            <Route path='/pathologist/messaging/sendemail' render={()=><Sms/>}/>
            <Route path='' render={()=><NoticeBoard/>}/>
        </Switch>
    )
}
