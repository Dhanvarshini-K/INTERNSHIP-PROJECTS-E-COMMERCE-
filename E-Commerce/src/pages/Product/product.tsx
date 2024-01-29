import "../Home/home.scss";
import { useContext } from "react";
import { ShopContext } from "../../components/Page_Content/Context/ShopContext";
import { useParams } from "react-router-dom";
import HomeProduct from "../../components/Page_Content/HomeProductDisplay/ProductItem";
import ProductDisplay from "../../components/Page_Content/ProductDisplay/productDisplay";
import BreadCrums from "../../components/Page_Content/BreadCrums.tsx/breadcrums";

const ProductPage = () => {
  const { productList }: any = useContext(ShopContext) || {};
  const { productId } = useParams();
  const product = productList.find((e : any) => e.id === Number(productId));

  return (
    <>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <div className="product container">
        <HomeProduct />
      </div>
    </>
  );
};
export default ProductPage;
