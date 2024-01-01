import React from "react";
import "../Article_Card/article.css";
import { ArticleItem } from "./article_card";
import arrow_right_icon from "../../assets/icons/arrow_right_icon.svg";
import { Link } from "react-router-dom";

const ArticleMain = () => {

    const RenderArticle = ArticleItem.filter((article) => {
        return (article.id <= 3)
    }).map((article) => {
        return (
       
            <div className="article container d-flex  flex-column gap-3">
            <img src={article.image} alt="home" className="img-fluid  mx-auto d-block" />
            <div className=" d-flex flex-column align-items-center ">
            <span className="h6 fw-bold">{article.title}</span>
            <div className="link d-flex justify-content-center w-50" >
                <a href="#" className="fw-normal text-decoration-none fw-bold border-bottom border-dark text-dark">{article.link}</a>
                 <img src={article.icons} alt="arrow_right"/>
            </div> 
            </div>
            </div>

        )
    })
    return (
        <React.Fragment>
            <section>
                <div className="articles_container container d-flex justify-content-between pt-4 align-items-center">
                    <span className="h3 fw-bold">Articles</span>
                    <div className="link d-flex align-items-center">
                        <Link to="/blog" className="fw-medium text-decoration-none  border-bottom border-dark text-dark">MoreArticles</Link>
                        <img src={arrow_right_icon} alt="arrow_right" />
                    </div>
                </div>
                <div className="article_list container d-flex gap-3 justify-content-between p-3 flex-wrap flex-md-nowrap">
                    {RenderArticle}
                </div>
            </section>
        </React.Fragment>
    )
}
export default ArticleMain;