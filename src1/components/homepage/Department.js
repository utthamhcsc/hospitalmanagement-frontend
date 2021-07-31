import React from 'react';
const departments= [
   {
     name:'ENT',
     icon:'https://images.assetsdelivery.com/compings_v2/photoamir/photoamir1709/photoamir170900011.jpg'
   },
   {
     name:'General Surgery',
     icon:'https://previews.123rf.com/images/nsit0108/nsit01081907/nsit0108190701877/127162091-surgery-operation-icon-cartoon-of-surgery-operation-icon-for-web-design-isolated-on-white-background.jpg'
   },
   {
     name:'Dermatalogy',
     icon:'https://image.shutterstock.com/image-photo/young-sensual-blonde-woman-mosaic-260nw-1486032920.jpg'
   },
   {
     name:'Urology',
     icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpata5N2OQPaE6C-5UX_aOk9cSIGg5QQ7wGl3AyMuyUQuxNVCQDg&s'
   },
   {
     name:'Radiology',
     icon:'https://t3.ftcdn.net/jpg/02/43/10/12/500_F_243101222_pUbeGTk4kYl3Behun33aeRkQLxSyOlL4.jpg'
   },
   {
     name:'Nueclear Medicine',
     icon:'https://image.shutterstock.com/image-vector/molecular-cross-logo-atom-nuclear-260nw-1494548840.jpg'
   },
   {
     name:'Cosmetology',   
     icon:'https://comps.canstockphoto.com/young-woman-having-machine-cosmetology-drawing_csp59618992.jpg'
   },
   {
     name:'Dental Surgery',
     icon:'https://previews.123rf.com/images/whilerests/whilerests1612/whilerests161200172/68358611-human-teeth-icons-set-isolated-on-white-background-for-dental-medicine-clinic-linear-dentist-logo-ve.jpg'
   },

   {
     name:'Heart Center',
     icon:'https://previews.123rf.com/images/ajibon/ajibon1702/ajibon170200005/72298744-human-heart-isolated-on-white-background-vector-illustration.jpg'
   },
   {
     name:'Cancer',
     icon:'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2363783.jpg'
   },
   {
     name:'Nuero Science',
     icon:'https://img.medscape.com/thumbnail_library/dt_160527_brain_activity_800x600.jpg'
   },
   {
     name:'Bones & Joints',
     icon:'https://image1.masterfile.com/getImage/Njc5LTA3OTYyNjAzZW4uMDAwMDAwMDA=AAaoYv/679-07962603en_Masterfile.jpg'
   }
   
 ];
 export default ()=>
<React.Fragment>
<div class="bg-white container pb-5" style={{paddingTop:90+'px'}}  id="department">
 <div class="h1 text-center pb-4">Our Departments</div>
  
 <div class="row pl-md-5">
 {departments.map((item)=>
  <div class="col-sm-12 col-md-6 col-lg-4 h4 m-0 p-0" style={{minWidth:300+'px'}}><img class="img-fluid m-3" src={item.icon} style={{height:50+'px',width:50+'px',borderRadius:50+'%'}} onError={(event)=>event.target.setAttribute("src","white.png")}/>{item.name.toUpperCase()}</div>)}
 </div>
 </div>
 
</React.Fragment>