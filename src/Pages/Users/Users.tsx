import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../Components/DataTable/DataTable";
import "./Users.scss";
import { rows } from "../../Data";
import { useState } from "react";
import Add from "../../Components/AddButton/Add";
console.log(rows);

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },

  {
    field: "firstname",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastname",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "number",
    width: 200,
    editable: true,
  },
  {
    field: "fullname",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstname || ""} ${params.row.lastname || ""}`,
  },
  {
    field: "verified",
    headerName: "Status",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={rows} />
      {open && <Add slug="user" colums={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
