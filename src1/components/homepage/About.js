import React from 'react';


export default ()=>
<React.Fragment>
<div className="container  bg-white pb-5" id="about">
<div className="text-center h1 pb-4" style={{paddingTop:90+'px'}}>About Our Center</div>
<ul className="nav nav-pills  justify-content-center pb-4" id="pills-tab" role="tablist">
  <li className="nav-item">
    <a className="nav-link h5 active" id="pills-about-tab" data-toggle="pill" href="#pills-about" role="tab" aria-controls="pills-home" aria-selected="true"><b>About Hospital</b></a>
  </li>
   <li className="nav-item">
    <a className="nav-link h5" id="pills-vision-tab" data-toggle="pill" href="#pills-vision" role="tab" aria-controls="pills-home" aria-selected="true"><b>Vision & Mission</b></a>
  </li>
   <li className="nav-item">
    <a className="nav-link h5" id="pills-offer-tab" data-toggle="pill" href="#pills-offer" role="tab" aria-controls="pills-home" aria-selected="true"><b>What we offer</b></a>
  </li>
  <li className="nav-item">
    <a className="nav-link h5" id="pills-work-tab" data-toggle="pill" href="#pills-work" role="tab" aria-controls="pills-profile" aria-selected="true"><b>How We Work</b></a>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab">
<div className="row justify-content-between px-5">
<div className=" col-sm-12 col-md-6">
  <img src="https://www.biospectrumindia.com/uploads/articles/hospital-13551.jpg" className="img-fluid img-thumbnail"  alt='no img'/>
</div>
<div className="col-sm-12 col-md-6 p-0 m-0 px-3">
  <p className="text-justify  p-0 text-sm" >
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
   
    <button className="btn btn-outline-success btn-sm">More Information</button>
</div>
</div>
  </div>
  <div className="tab-pane fade" id="pills-vision" role="tabpanel" aria-labelledby="pills-vision-tab">
    <div className="row justify-content-between px-5">
<div className=" col-sm-12 col-md-6">
  <img src="https://www.biospectrumindia.com/uploads/articles/hospital-13551.jpg" className="img-fluid img-thumbnail" alt='no img' />
</div>
<div className="col-sm-12 col-md-6 p-0 m-0 px-3">
  <p className="text-justify p-0 text-sm" >
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
    
    <button className="btn btn-outline-success btn-sm">More Information</button>
</div>
</div>
  </div>
  
  <div className="tab-pane fade" id="pills-offer" role="tabpanel" aria-labelledby="pills-offer-tab">
     <div className="row justify-content-between px-5">
<div className=" col-sm-12 col-md-6">
  <img src="https://www.biospectrumindia.com/uploads/articles/hospital-13551.jpg" className="img-fluid img-thumbnail" alt='no img'/>
</div>
<div className="col-sm-12 col-md-6 p-0 m-0 px-3">
  <p className="text-justify p-0 text-sm" >
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
   
    <button className="btn btn-outline-success btn-sm">More Information</button>
</div>
</div>
  </div>

   <div className="tab-pane fade" id="pills-work" role="tabpanel" aria-labelledby="pills-work-tab">
     <div className="row justify-content-between px-5 ">
<div className=" col-sm-12 col-md-6">
  <img src="https://www.biospectrumindia.com/uploads/articles/hospital-13551.jpg" className="img-fluid img-thumbnail" alt='no img' />
</div>
<div className="col-sm-12 col-md-6 p-0 m-0 px-3">
  <p className="text-justify p-0  text-sm" >
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
    
    <button className="btn btn-outline-success btn-sm">More Information</button>
</div>
</div>
   </div>
 
</div>
</div>

</React.Fragment>
