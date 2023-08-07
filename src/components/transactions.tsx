"use client";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Transactions = () => {
  const [rowData] = useState([
    {
      Invoices: "MD02134D34",
      Data: "08/04/2021",
      Desctiption: "Code 2313123",
      Status: "Completed",
      Description: "$212332",
    },
  ]);

  const [columnDefs] = useState<any>([
    { field: "Invoices", filter: true },
    { field: "Data", filter: true },
    { field: "Description", filter: true },
    { field: "Status", filter: true },
    { field: "Description", filter: true },
  ]);

  const defaultColDef = { sortable: true };

  const cellClickedListener = useCallback((event: any) => {
    console.log("cellClicked", event);
  }, []);

  return (
    <div className="ag-theme-alpine  h-96 w-[960px]">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        rowSelection="multiple"
        onCellClicked={cellClickedListener}
      />
    </div>
  );
};

export default Transactions;
