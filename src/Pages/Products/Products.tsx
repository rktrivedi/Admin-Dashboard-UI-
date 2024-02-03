import { useState } from "react";
import DataTable from "../../Components/DataTable/DataTable";
import "./Products.scss";
import Add from "../../Components/AddButton/Add";
import { GridColDef } from "@mui/x-data-grid";
import { instituteRows } from "../../Data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => (
      <img src={params.row.img || "/noimage.png"} alt="Product" />
    ),
  },
  {
    field: "productName",
    headerName: "Product Name",
    width: 150,
    editable: true,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 120,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
    editable: true,
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 120,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={instituteRows} />
      {open && <Add slug="product" colums={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
