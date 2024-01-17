import { data_product } from "../../Functionality_Data/homeProductdata";
import Item from "../../Common_Functionality/ProductItems/product_item";
import "../../Common_Functionality/ProductItems/product_item.scss";
const HomeProduct = () => {
  return (
    <div className="popular_item d-flex gap-2">
      {data_product.map((item) => {
        return (
          <Item
            key={item}
            id={item.id}
            product_title={item.product_title}
            image={item.image}
            actual_price={item.actual_price}
            discount_price={item.discount_price}
            discount_title={item.discount_title}
            discount_percent={item.discount_percent}
            product_reviews={item.product_reviews}
          />
        );
      })}
    </div>
  );
};

export default HomeProduct;
