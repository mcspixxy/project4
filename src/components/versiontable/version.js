// import React from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// // import "../table.css"; // Adjust import to use the generated CSS file
// import { Link } from "react-router-dom";

// const DataTable = (props) => {
//   const actionColumn = {
//     field: "action",
//     headerName: "Action",
//     width: 150,
//     renderCell: (params) => {
//       return (
//         <div className="action">
//           <Link to={`/${props.slug}/${params.row.id}`}>
//             <img
//               src="/ViewsIcon.svg"
//               alt="View"
//               onClick={(event) => {
//                 /* Handle view click if needed */
//               }}
//             />
//           </Link>
//         </div>
//       );
//     },
//   };

//   return (
//     <div className="dataTable">
//       <DataGrid
//         sx={{
//           "@media print": {
//             ".MuiDataGrid-main": { color: "rgba(0, 0, 0, 0.87)" },
//           },
//         }}
//         className="dataGrid"
//         rows={props.rows}
//         columns={[...props.columns, actionColumn]}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 10,
//             },
//           },
//         }}
//         slots={{ toolbar: GridToolbar }}
//         slotProps={{
//           toolbar: {
//             showQuickFilter: true,
//             quickFilterProps: { debounceMs: 500 },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//         disableColumnFilter
//         disableDensitySelector
//         disableColumnSelector
//       />
//     </div>
//   );
// };

// export default DataTable;

// 
import React from 'react';
import { Link } from 'react-router-dom';

const VersionTable = (props) => {
  const { data } = props;

  return (
    <div className="versionTable">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>File Name</th>
            <th>Version</th>
            <th>Download Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td> {/* Ganti fileName dengan name */}
              <td>{row.version}</td>
              <td>
                <a href={row.url} target="_blank" rel="noopener noreferrer"> {/* Ganti downloadLink dengan url */}
                  Download
                </a>
              </td>
              <td>
                <Link to={`/${props.slug}/${row.id}`}>
                  <img
                    src="/ViewsIcon.svg"
                    alt="View"
                    onClick={(event) => {
                      /* Handle view click if needed */
                    }}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VersionTable;
