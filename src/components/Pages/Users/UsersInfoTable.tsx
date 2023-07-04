import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "AllUsers", headerName: "All Users", width: 120 },
  { field: "active", headerName: "Active Users", width: 120 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, active: false, AllUsers: "Snow", firstName: "Jon", age: 35 },
  { id: 2, active: false, AllUsers: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, active: false, AllUsers: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, active: false, AllUsers: "Stark", firstName: "Arya", age: 16 },
  { id: 5, active: false, AllUsers: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, active: false, AllUsers: "Melisandre", firstName: null, age: 150 },
  { id: 7, active: false, AllUsers: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, active: false, AllUsers: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, active: false, AllUsers: "Roxie", firstName: "Harvey", age: 65 },
];

export const UsersInfoTable = () => {
  return (
    <div style={{ height: "auto", width: "100%", background: "white" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
