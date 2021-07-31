import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../../Table'
import {Getdata,Postdata} from '../../../../Network/Server'
import PurchaseMedicine from '../../../../Forms/Pharmacy/PurchaseMedicine'
import ViewPurchase from '../../../../Forms/Pharmacy/ViewPurchase'
import EditPurchaseMedicine from '../../../../Forms/Pharmacy/EditPurchaseMedicine'
import swal from 'sweetalert'
export default (props) =>{
  const deletealert=(url,val)=>{
    swal({
      title: "Are you sure?",
     
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Getdata(url+'/'+val).then(setdataSrc(data=>data.filter(item=>item.purchase.id!=val)))
       
      } 
    });
   }
  
  const [supplier,setSupplier]=React.useState([]);
  const [medicineCategory,setMedicineCategory]=React.useState([])

  const [index,setindex]=React.useState({});
  const [index1,setindex1]=React.useState({});
    const column=[{data:'purchase.id',title:'Purchase Num'},
    {data:'supplier.itemSupplier',title:'Supplier Name'},
    {data:'purchase.total',title:'Amount'},
    {data:'purchase.tax',title:'Tax'},
    {data:'purchase.discount',title:'Discount'},
    {data:'purchase.netamount',title:'Total'},
    {data:'',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      <BrowserRouter>
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-info'} data-toggle='modal'
       data-target='#viewPurchase'><i className='fa fa-eye'></i></button>
      
      <button onClick={()=> deletealert('purchaseMedicine/delete/',rowData.purchase.id)
     } className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
     
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{Getdata('purchaseMedicine/get').then(data=>{setdataSrc(data);
    console.log(data)
    });},[])
    const deletebyid=React.useCallback((id)=>{
      Getdata('purchaseMedicine/delete/'+id).then(data=>setdataSrc(item=>item.filter(item1=>item1.id!=data)))
     
  })
    const getSupplier=React.useCallback(()=>{
      Getdata('item-supplier/get').then(data=>setSupplier(data))
      Getdata('medicineCat/get').then(data=>setMedicineCategory(data));
  })

    return (
        <>
        <div className='card elevation-1 '>
        <nav aria-label="breadcrumb"  >
  <ol class="p-2 px-5 overflow-auto border   bg-white " style={{backgroundColor:'#ffffff !important'}} >

  <li class=" font-weight-bold d-flex justify-content-between align-items-center p-0" aria-current="page">
      <h5  >Pharmacy Purchase</h5>
<div className='btn-group '>
    <button className={'btn btn-xs  btn-primary ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={getSupplier} data-target="#purchasemedicine" class="btn btn-primary text-xs  btn-xs  ml-1"> <i class="fa fa-plus"></i> Add Purchase</button>               
          
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='medicinestock' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
   
    <PurchaseMedicine  supplier={supplier} medicineCategory={medicineCategory}/>
    <ViewPurchase {...index1.supplier} {...index1.purchase}/>
  </div>
  </div>
        </>
    )
}
