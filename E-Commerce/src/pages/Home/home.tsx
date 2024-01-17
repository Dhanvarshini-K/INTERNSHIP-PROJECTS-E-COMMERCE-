import CardItem from "../../components/Common_Functionality/Service_Card/card";
import SaleUpMain from "../../components/Common_Functionality/SaleUp_Card/saleup";
import "../Home/home.scss";
import HomePageMain from "../../components/Page_Content/Home/home";
import ArticleMain from "../../components/Page_Content/Article_Card/article";
import HomeProduct from "../../components/Page_Content/HomeProductDisplay/product_item";

const HomePage = () => {
  return (
    <>
      <HomePageMain />
      <div className="product container">
        <HomeProduct />
      </div>
      <CardItem />
      <SaleUpMain />
      <ArticleMain />
    </>
  );
};
export default HomePage;
