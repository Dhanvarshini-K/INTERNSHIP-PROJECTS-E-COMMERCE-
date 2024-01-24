import { useReducer, useState } from "react";
import "../Blog/blog.scss";
import {
  chevron_right_icon,
  down_arrow,
  first_page_first_icon,
  first_page_second_icon,
  first_page_third_icon,
  first_page_fourth_icon,
} from "../../../assets/resources/icons";

import ArticleList from "../../Common_Functionality/Article_Card/articleList";
import { Link } from "react-router-dom";

const BlogMain = () => {
  const [showMore, setShowMore] = useState<Boolean>(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Blog");

  const viewReducer = (state: any, action: any) => {
    switch (action.type) {
      case "THREE":
        return "row-cols-md-3 fw-bold fs-6";
      case "FOUR":
        return "row-cols-md-4";
      case "TWO":
        return "row-cols-md-2";
      case "ONE":
        return "row-cols-md-1";
      default:
        return state;
    }
  };
  const [gridView, dispatch] = useReducer(viewReducer, "row-cols-md-3");

  return (
    <>
      <div className="blog_image">
        <div className="carousel-item active d-flex flex-column gap-3 ">
          <div className="blog_link d-flex justify-content-center gap-3 align-items-baseline">
            <Link to="/home" className="text-decoration-none text-dark h5 ">
              Home
            </Link>
            <img src={chevron_right_icon} alt="chevron_right_icon" />
            <Link
              to="/blog"
              className="text-decoration-none text-dark h5 fw-bold"
            >
              Blog
            </Link>
          </div>
          <span className="h1 fw-bold text-center">Our Blog</span>
          <span className="h4 text-center">
            Home ideas and design inspiration
          </span>
        </div>
      </div>

      <section className="container d-flex justify-content-between  p-3">
        <div className=" d-flex d-none d-md-block">
          <a href="#" className="text-dark fw-bold ">
            All Blog
          </a>
          <a
            href="#"
            className="fw-bold text-decoration-none text-secondary ps-4"
          >
            Featured
          </a>
        </div>

        <div className="sort_container d-md-flex d-none d-md-block align-items-start">
          <div className="d-flex gap-2 align-items-baseline">
            <p className="text-center fs-5">Sort by</p>
            <img src={down_arrow} alt="down_arrow" />
          </div>

          <div className="d-flex ps-3">
            <button
              onClick={() => dispatch({ type: "THREE" })}
              className="border-1"
            >
              <img src={first_page_first_icon} alt="first_page_icon" />
            </button>
            <button
              onClick={() => dispatch({ type: "FOUR" })}
              className="border-1"
            >
              <img src={first_page_second_icon} alt="first_page_icon" />
            </button>
            <button
              onClick={() => dispatch({ type: "TWO" })}
              className="border-1"
            >
              <img src={first_page_third_icon} alt="first_page_icon" />
            </button>
            <button
              onClick={() => dispatch({ type: "ONE" })}
              className="border-1"
            >
              <img src={first_page_fourth_icon} alt="first_page_icon" />
            </button>
          </div>
        </div>
        <div className="dropdown d-flex gap-2 flex-column d-md-none d-sm-block">
          <div
            className="dropdown-btn border border-dark rounded d-flex justify-content-between p-1 ps-2"
            onClick={() => setIsActive(!isActive)}
          >
            <span className="h5">{selectedCategory}</span>
            <img src={down_arrow} alt="down_arrow" />
          </div>
          {isActive && (
            <div className="dropdown-content border border-dark  d-flex flex-column gap-2 rounded p-2">
              <div className="dropdown-item text-center h5">
                <Link
                  to="#"
                  className="text-decoration-none  text-secondary"
                  onClick={() => {
                    setIsActive(false);
                    setSelectedCategory("Featured");
                  }}
                >
                  Featured
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <ArticleList view={gridView} addArticle={showMore} />

      <div className="p-4 d-flex justify-content-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="btn shadow-none bg-white btn-rounded border-dark"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="btn shadow-none bg-white btn-rounded border-dark"
          >
            Show More
          </button>
        )}
      </div>
    </>
  );
};
export default BlogMain;
