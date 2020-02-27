import React from 'react'

export default (props)=> {
    return (
        <div class="modal fade" id="viewDetails" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
         <div class="modal-content" role="document"> 
    
    <div className="card">
       <div class="card-header text-white bg-primary "> View Details 
       <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button> 
        </div>
      <div className="card-body">  
      <ul class="list-group">
      {
    props.data?Object.keys(props.data).map((name)=>
<li class="list-group-item d-sm-flex justify-content-between"><div className="font-weight-bold">{name}</div><div>{props.data[name]}</div></li>):''
}
</ul>  








      </div> 
      </div>
    </div>
    </div>
    </div>    
    )
}
