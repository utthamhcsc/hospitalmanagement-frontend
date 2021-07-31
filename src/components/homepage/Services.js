import React, { useEffect } from 'react';
const services=[{
  icon:"images/Xray.jpg",
  name:"X-ray Service"
},
{
  "icon":"images/pharmacy.jpg",
  "name":"Pharmacy Service"
},
{
  "icon":"images/personalizedcare.jpg",
  "name":"Personslized Care Service"
},
{
  "icon":"images/emergency.jpg",
  "name":"Accident & Emergency"
},
{
  "icon":"images/bloodbank.jpg",
  "name":"Blood Bank"
},
{
  "icon":"images/physiotherapy.jpg",
  "name":"Physiotherapy"
}




];
export default ()=>

  
<React.Fragment>
      
   <section id="service" style={{backgroundColor:'#00796B ',paddingTop:90+'px'}}>
   
<div className="container"  >
    <div className="h1 text-center text-white pb-5 animate__animated animate__bounce" >Our Best Services</div>
  <div className="row pl-3 pl-md-5">
  {services.map((item)=>
    <div className="col-sm-12 col-md-6 col-lg-4 pb-5" >
       <div className="card border-0 " style={{maxWidth:18+'rem'}}>
         <div className="card-body text-center">
           <img src={item.icon} className="img-thumbnail mb-2" style={{height:10+'rem',width:10+'rem',borderRadius:50+'%',color:'#222222'}} onError={(event)=>event.target.setAttribute("src","white.png")}/>   
            <div className=" py-2 text-md" style={{color:'#222222'}}><b>{item.name}</b></div>
            <div className="text-justify p-1 text-sm" style={{lineHeight:'20px',color:'#777777'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            </div>
         </div>  
       </div>
    </div>
   ) }
  </div>
</div>
</section>
</React.Fragment>