import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NoticeBoard from './NoticeBoard'
import SendEmail from './SendEmail'
import AddNewMessage from './NewMessage'
import Sms from './Sms'

export default function index() {
    return (
        <Switch>
            <Route path='/admin/notification/newmessage' render={()=><AddNewMessage/>}/>
            <Route path='/admin/notification/noticeboard' render={()=><NoticeBoard/>}/>
            <Route path='/admin/notification/sendemail' render={()=><SendEmail/>}/>
            <Route path='' render={()=><NoticeBoard/>}/>
        </Switch>
    )
}
