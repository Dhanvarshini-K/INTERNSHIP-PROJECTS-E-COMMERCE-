import CardItem from "../../components/Common_Functionality/ServiceCard/Card";
import SaleUpMain from "../../components/Common_Functionality/SaleUpCard/SaleUp";
import "../Home/Home.scss";
import ArticleMain from "../../components/Page_Content/ArticleCard/Article";
import HomeProduct from "../../components/Page_Content/HomeProductDisplay/ProductItem";
import HomePageMain from "../../components/Page_Content/Home/home";

const HomePage = () => {
  return (
    <>
      <HomePageMain />
      <div className="product container ">
        <HomeProduct />
      </div>
      <CardItem />
      <SaleUpMain />
      <ArticleMain />
    </>
  );
};
export default HomePage;
