import { GridColDef } from "@mui/x-data-grid";
import "./Add.scss";

type Props = {
  slug: string;

  colums: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="add">
      <div className="modal">
        <span onClick={() => props.setOpen(false)} className="close">
          X
        </span>
        <h1>Add New{props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.colums
            .filter((item) => item.field !== "id" && item.field !== "img")

            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
