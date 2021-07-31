import React from 'react'

export default function MessageDisplay(props) {
    return (
<div id={props.id} className="panel-collapse collapse fade border-top p-1" aria-expanded="false" >
  <div className="box-body">
    <div className="row">
      <div className="col-md-9">
    <p style={{overflowWrap:'break-word'}} className='bg-light'>{props.message}</p>
        </div>{/* /.col */}
      <div className="col-md-3">
        <div className>
          <div className="box-body">
            <ul className="nav nav-pills">
    <li><i className="fa fa-calendar-check-o" /> Publish Date :{new Date(props.publishDate)=='Invalid Date'?'':new Date(props.publishDate).toLocaleDateString()}</li>
              <li><i className="fa fa-calendar" /> Notice Date :{new Date(props.noticeDate)=='Invalid Date'?'':new Date(props.noticeDate).toLocaleDateString()} </li>
            </ul>
            <h4 className="text text-primary ptt10"> Message To</h4>
            <ul className="">
            {
                (props.messageTo||[]).map(data=><li className='d-block text-left'>
                    <i className="fa fa-user mx-1" aria-hidden="true" />
                    {data.role}                                                                    </li>)
            }  
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
