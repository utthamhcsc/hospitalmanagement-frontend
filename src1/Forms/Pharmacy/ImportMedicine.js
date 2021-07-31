import React from 'react'
export default ()=>{
    return(
        <div class="modal fade" id="importmedicine" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">
        <div class="card ">
            
           <div class="py-2 px-3 d-flex justify-content-between w-100 border-bottom">
               <div>Medicines</div>
           <button type="submit" className="btn btn-sm btn-primary ">Download sample data</button>
           </div>
           <div className="card-body p-0 m-0  ">
               <div className=" m-4">
                   <p>Note: Your CSV data should be in the format below. The first line of your CSV file should be the column headers as in the table example. Also make sure that your file is UTF-8 to avoid unnecessary encoding problems.</p>
               </div>
         <div className="container-fluid ">
             <table id="myTable" class="table my-5 ">
                 <thead>
                      <tr>
                         <td>Medicine </td>
                         <td >Company </td>
                         <td>Composition </td>
                         <td>Group</td>
                         <td>Unit</td>
                         <td>Min Level</td>
                         <td>Re-Order Level</td>
                         <td>Vat</td>
                         <td>Unit Packing</td>
                         <td>Note</td>
                     </tr>
                 </thead>
                 <tbody className="border-bottom">
                     {
                     <tr>
                        <td>Sample Data</td>
                        <td>Sample Data</td>
                        <td>Sample Data</td>
                        <td>Sample Data</td>
                        <td>Sample Data</td>
                        <td>Sample Data</td>
                        <td>Sample Data</td>
                        <td>Sample Data</td>
                        <td>Sample Data</td>
                        <td>Sample Data</td>
                         

                     </tr>
                    
                    
                     }
                   </tbody>
                 </table>
                 <div className=" from row d-flex mx-4 justify-content-between">
                     <div className="form-group col-sm-6">Medicine Category
                         <select id="input" className="form-control my-2 ">
                             <option selected>Select</option>
                            <option>Syrup</option>
                            <option>Capsule</option>
                            <option>Injection</option>
                            <option>Ointment</option>
                            <option>Cream</option>
                            <option>surgical</option>
                            <option>Drops</option>
                            <option>Inhalers</option>
                            </select>
                     </div>
                     <div className="form-group col-sm-6">Select CSv File
                         <input type="file" className="form-control my-2"/>
                     </div>
                     
                 </div>
                 <div className="d-flex float-right p-2">
                     <button type="submit" className="btn  btn-outline-primary ">Import Medicine</button>
                     </div>
         </div>
         
             </div>
</div>
</div>
</div>
</div>


    )
}
