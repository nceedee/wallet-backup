import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import { useState } from "react";
import { Card } from "../../Global/Card/Card";
import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "AllUsers", headerName: "All Users", width: 180 },
  { field: "active", headerName: "Active Users", width: 180 },
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
  { id: 1, active: false, AllUsers: "Snow", firstName: "Jon" },
  { id: 2, active: false, AllUsers: "Lannister", firstName: "Cersei" },
  { id: 3, active: false, AllUsers: "Lannister", firstName: "Jaime" },
  { id: 4, active: false, AllUsers: "Stark", firstName: "Arya" },
  { id: 5, active: false, AllUsers: "Targaryen", firstName: "Daenerys" },
  { id: 6, active: false, AllUsers: "Melisandre", firstName: "Emeka" },
  { id: 7, active: false, AllUsers: "Clifford", firstName: "Ferrara" },
  { id: 8, active: false, AllUsers: "Frances", firstName: "Rossini" },
  { id: 9, active: false, AllUsers: "Roxie", firstName: "Harvey" },
];

export const UsersInfoTable = () => {
  // const [posts, setPosts] = useState([]);
  // const handleDelete = (postIndex: any) => {
  //   setPosts(prevPosts => prevPosts.filter((_, index) => index !== postIndex));
  // };
  return (
    <MaxCard>
      <Card className="sm:mt-20 md:mt-0">
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
          {/* <Button variant="outlined" color="error" onClick={() => handleDelete(postIndex)}>
            Delete
          </Button> */}
        </div>
      </Card>
    </MaxCard>
  );
};
