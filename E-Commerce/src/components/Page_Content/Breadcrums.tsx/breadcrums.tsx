import { chevron_right_icon } from "../../../assets/resources/icons";

const BreadCrums = (props: any) => {
  const { product } = props;
  return (
    <div className="container p-3">
      Home <img src={chevron_right_icon} alt="right_icon" /> Shop <img src={chevron_right_icon} alt="" /> {product.category} <img src={chevron_right_icon} alt="" /> {product.product_title}
    </div>
  );
};

export default BreadCrums;
