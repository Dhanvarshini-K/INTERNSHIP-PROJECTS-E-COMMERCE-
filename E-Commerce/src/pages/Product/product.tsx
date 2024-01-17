import ProductMain from "../../components/Page_Content/Product/productDisplay";
import "../Home/home.scss";
import { useContext } from "react";
import { ShopContext } from "../../components/Page_Content/Context/shopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "../../components/Page_Content/Breadcrums.tsx/breadcrums";

const ProductPage = () => {
  // const {productList} : any = useContext(ShopContext);
  const { productList }: any = useContext(ShopContext) || {};
  const { productId } = useParams();
  const product = productList.find((e) => e.id === Number(productId));
  return (
    <>
      {/* <ProductMain/>
        <div className="product container mb-5">
        <ProductItem view={"d-flex gap-3 pb-5 pt-2"} layout_value={""} product={false}/>
        </div> */}
      <BreadCrums product={product} />
      <ProductMain product={productList} />
    </>
  );
};
export default ProductPage;
