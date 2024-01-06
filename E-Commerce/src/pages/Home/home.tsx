import CardItem from "../../components/Common_Functionality/Service_Card/card";
import SaleUpMain from "../../components/Common_Functionality/SaleUp_Card/saleup";
import "../Home/home.scss"
import ProductItem from "../../components/Common_Functionality/Product_Card/product";
import HomePageMain from "../../components/Projects/Home/home";
import ArticleMain from "../../components/Projects/Article_Card/article";



const HomePage = ()=>{
    return(
        <>
      <HomePageMain/>
        <div className="product container">
            <ProductItem view={"d-flex gap-3 pb-5 pt-2"} layout_value={""} product={false}/>
        </div>
        <CardItem/>
        <SaleUpMain/>
      <ArticleMain/>
        </>
    )
}
export default HomePage;