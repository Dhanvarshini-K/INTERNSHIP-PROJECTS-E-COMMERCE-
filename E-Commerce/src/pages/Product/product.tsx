import "../Home/home.scss";
import { useContext } from "react";
import { ShopContext } from "../../components/Page_Content/Context/shopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "../../components/Page_Content/Breadcrums.tsx/breadcrums";
import ProductDisplay from "../../components/Page_Content/ProductDisplay/productDisplay";
import HomeProduct from "../../components/Page_Content/HomeProductDisplay/product_item";
import { sofaImages } from "../../assets/resources/images";
import { star } from "../../assets/resources/icons";
import Product from "../../components/Page_Content/Product/product";

const ProductPage = () => {
  const { productList }: any = useContext(ShopContext) || {};
  const { productId } = useParams();
  const product = productList.find((e) => e.id === Number(productId));

  
  return (
    <>
      <BreadCrums product={product} />
      <ProductDisplay product={product}/>
      <div className="product container">
        <HomeProduct />
      </div>
    </>
  );
};
export default ProductPage;
