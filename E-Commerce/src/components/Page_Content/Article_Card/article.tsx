import React from "react";
import "../Article_Card/article.scss";
import { arrow_right_icon } from "../../../assets/resources/icons";
import { Link, useNavigate } from "react-router-dom";
import { articleItem } from "../../Functionality_Data/article_card";

const ArticleMain = () => {
  const navigate = useNavigate();

  const handleArticlePage = (title: string, image: string) => {
    navigate("/article", { state: [title, image] });
  };
  const renderArticle = articleItem
    .filter((article: any) => {
      return article.id <= 3;
    })
    .map((article: any) => {
      return (
        <div className="article container d-flex  flex-column gap-3">
          <img
            src={article.image}
            alt="home"
            className="img-fluid  mx-auto d-block"
            onClick={() => handleArticlePage(article.title, article.image)}
          />
          <div className=" d-flex flex-column align-items-center ">
            <span className="h6 fw-bold">{article.title}</span>
            <div className="link d-flex justify-content-center w-50">
              <button
                className="fw-normal border-0 bg-transparent fw-bold border-bottom border-dark text-dark"
                onClick={() => handleArticlePage(article.title, article.image)}
              >
                {article.link}
              </button>
              <img src={article.icons} alt="arrow_right" />
            </div>
          </div>
        </div>
      );
    });
  return (
    <React.Fragment>
      <section>
        <div className="articles_container container d-flex justify-content-between pt-4 align-items-center">
          <span className="h3 fw-bold">Articles</span>
          <div className="link d-flex align-items-center">
            <Link
              to="/blog"
              className="fw-medium text-decoration-none  border-bottom border-dark text-dark"
            >
              MoreArticles
            </Link>
            <img src={arrow_right_icon} alt="arrow_right" />
          </div>
        </div>
        <div className="article_list container d-flex gap-3 justify-content-between p-3 flex-wrap flex-md-nowrap">
          {renderArticle}
        </div>
      </section>
    </React.Fragment>
  );
};
export default ArticleMain;
