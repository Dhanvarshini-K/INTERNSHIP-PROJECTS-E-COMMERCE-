import Item from "../../Common_Functionality/ProductItems/ProductItem";
import "../../Common_Functionality/ProductItems/ProductItem.scss";
import { homeProductListDocuments } from "../../Functionality_Data/AllProductCardAppwrite";


const HomeProduct = () => {
  return (
    <div className="popular_item d-flex gap-2">
      {homeProductListDocuments.documents.map((item) => {
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
