import SIngle from "../../Components/SinglePage/SIngle";
import { singleUser } from "../../Data";
import "./User.scss";
const User = () => {
  return (
    <div className="user">
      <SIngle {...singleUser} />
    </div>
  );
};

export default User;
