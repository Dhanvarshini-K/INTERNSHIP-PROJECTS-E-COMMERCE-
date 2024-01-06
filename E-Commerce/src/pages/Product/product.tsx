import ProductItem from "../../components/Common_Functionality/Product_Card/product";
import ProductMain from "../../components/Projects/Product/product";
import "../Home/home.scss"


const ProductPage =()=>{
    return(
        <>
        <ProductMain/>
        <div className="product container mb-5">
        <ProductItem view={"d-flex gap-3 pb-5 pt-2"} layout_value={""} product={false}/>
        </div>
        </>
    )
}
export default ProductPage;