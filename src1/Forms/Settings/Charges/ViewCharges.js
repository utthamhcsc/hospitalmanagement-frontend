import React from "react";
import Table from "../../../components/Table";

export default function ViewCharges(props) {
    const column = [
        {
          data: "",
          title: "Sl.No",
          render: (data, type, row, meta) => `<b>${meta.row + 1}</b>`
        },
        { data: "organisationName", title: "Organisation Name" },
        { data: "charges", title: "Charge"}
      ];
      const columnDefs = []

  return (
    <div
      className="modal fade in"
      id="viewCharges"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content modal-media-content">
          <div className="modal-header bg-primary p-2 align-items-center">
          <h6 className="h6">Charge Details</h6>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
       
          </div>
          <div className="modal-body pt0 pb0">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 paddlr">
                <form
                  id="view"
                  acceptCharset="utf-8"
                  method="get"
                  className="ptt10"
                >
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <th>Charge Type</th>
                          <td>
                            <span id="charge_types">{props.chargeType}</span>
                          </td>
                          <th>Charge Category</th>
                          <td>
                            <span id="charge_categorys">{props.chargeCategory}</span>
                          </td>
                        </tr>
                        <tr>
                          <th>Code</th>
                          <td>
                            <span id="codes">{props.code}</span>
                          </td>
                          <th>Description</th>
                          <td>
  <span id="descriptions">{props.description}</span>
                          </td>
                        </tr>
                        <tr>
                          <th>Standard Charge ($)</th>
                          <td>
                            <span id="standard_charges">{props.standardCharge}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
              {/*./col-md-12*/}
            </div>
            {/*./row*/}
        <hr/>
                <Table id="viewChargesTable"
          col={column}
          dataSrc={props.organisationCharges}
          columnDefs={columnDefs}/>
        
            </div>
          </div>
          <div className="box-footer">
            <div className="pull-right paddA10"></div>
          </div>
        </div>
      </div>
    
  );
}
