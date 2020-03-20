import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,BrowserRouter} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'
import PurchaseMedicine from '../../../Forms/Pharmacy/PurchaseMedicine'
import ViewPurchase from '../../../Forms/Pharmacy/ViewPurchase'
export default (props) =>{
  const [index1,setindex1]=React.useState({});
    const column=[{data:'medicineName',title:'Medicine Name'},
    {data:'batchNum',title:'Batch No'},
    //{data:'purchase.total',title:'Company Name'},
    {data:'medicineCategory',title:'Medicine Category'},
  //  {data:'purchase.discount',title:'Medicine Group'},
    {data:'supplier',title:'Supplier'},
    {data:'expiryDate',title:'Expiry Date',render:( data, type, row, meta )=>new Date(data).toLocaleDateString()},
    {data:'availableQuantity',title:'Qty'}
]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[]
     //   {targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(
      //<BrowserRouter>
    //  <button onClick={()=>setindex1(rowData)} className={'btn btn-xs btn-warning'} data-toggle='modal'
    //   data-target='#viewPurchase'><i className='fa fa-eye'></i></button>
   //   </BrowserRouter>,td)}]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{Getdata('purchaseMedicine/get').then(data=>{
        var my=[];
        data.map(item=>item.purchase.medicine.map(item1=>{
            if(new Date(item1.expiryDate)<new Date())
            my.push({...item1,supplier:item.supplier.itemSupplier})}))
            setdataSrc(my)
    console.log(my)
    });},[])
    return (
        <>
        <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
      <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Expiry Medicine</h6>
  <div className='btn-group p-0'>
          
                         </div>
  </li>
  </ol>
  </nav>

  <div className='px-5 pb-5'>
    <Table id='medicinestock' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
   </div>
        </>
    )
}
