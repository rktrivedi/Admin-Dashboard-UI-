import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="tittle">{item.title}</span>
          {item.listItems.map((listItems) => (
            <Link to="/" className="listItem" key={listItems.id}>
              <img src={listItems.icon} alt="" />
              <span className="listItmeTitle">{listItems.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
