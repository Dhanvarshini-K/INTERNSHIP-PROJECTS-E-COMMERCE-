import HomePageMain from "../../components/Home/home";
import ProductItem from "../../components/Product_Card/product";
import CardItem from "../../components/Service_Card/card";
import ArticleMain from "../../components/Article_Card/article";
import SaleUpMain from "../../components/SaleUp_Card/saleup";
import "../Home/home.css"


const HomePage = ()=>{
    return(
        <>
        <HomePageMain/>
        <div className="product container">
        <ProductItem view={"d-flex gap-3 pb-5 pt-2"} layout_value={""}/>
        </div>
        <CardItem/>
        <SaleUpMain/>
        <ArticleMain/>
        </>
    )
}
export default HomePage;