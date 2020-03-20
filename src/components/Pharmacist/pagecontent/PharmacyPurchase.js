import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'
import PurchaseMedicine from '../../../Forms/Pharmacy/PurchaseMedicine'
import ViewPurchase from '../../../Forms/Pharmacy/ViewPurchase'
export default (props) =>{
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
      <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal'
       data-target='#viewPurchase'><i className='fa fa-eye'></i></button>
     
      <button onClick={()=>setindex(rowData)} className={'btn btn-xs btn-success'} data-toggle='modal' data-target='#GenerateBill'><i className='fa fa-pencil'></i></button>
      
      <button onClick={()=>Postdata(`complain/${rowData.id}`,'DELETE',{}).then(data=>data.status==1?window.$('#generateBill').DataTable().row(row).remove().draw():'')} className={'btn btn-xs btn-danger'} ><i className='fa fa-trash'></i></button>
     
      </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{Getdata('purchaseMedicine/get').then(data=>{setdataSrc(data);
    console.log(data)
    });},[])
    const getSupplier=React.useCallback(()=>{
      Getdata('item-supplier/get').then(data=>setSupplier(data))
      Getdata('medicineCat/get').then(data=>setMedicineCategory(data));
  })

    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Purchase List</h6>
  <div className='btn-group p-0'>
    <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
    <button data-toggle="modal" onClick={getSupplier} data-target="#purchasemedicine" class="btn btn-light text-xs  btn-xs  ml-1"> <i class="fa fa-plus"></i> Add Purchase</button>               
          
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='medicinestock' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    <PurchaseMedicine supplier={supplier} medicineCategory={medicineCategory}/>
    <ViewPurchase {...index1.supplier} {...index1.purchase}/>
  </div>
        </>
    )
}
