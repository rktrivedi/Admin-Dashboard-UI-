import SIngle from "../../Components/SinglePage/SIngle";
import { singleProduct } from "../../Data";
import "./Product.scss";

const Product = () => {
  return (
    <div className="product">
      <SIngle {...singleProduct} />
    </div>
  );
};

export default Product;
