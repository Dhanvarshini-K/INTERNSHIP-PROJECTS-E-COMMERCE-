import { useReducer, useState } from "react";
import "../Blog/blog.css";
import chevron_right_icon from "../../assets/icons/chevron_right_icon.svg";
import down_arrow from "../../assets/icons/down_arrow.svg";
import first_page_first_icon from "../../assets/icons/first_page_first_icon.svg";
import first_page_second_icon from "../../assets/icons/first_page_second_icon.svg";
import first_page_third_icon from "../../assets/icons/first_page_third_icon.svg";
import first_page_fourth_icon from "../../assets/icons/first_page_fourth_icon.svg";

import ArticleList from "../Article_Card/articleList";

const BlogMain = () => {
    const [showMore, setShowMore] = useState<Boolean>(false);
    const viewReducer = (state: any, action: any) => {
        switch (action.type) {
            case 'THREE':
                return 'row-cols-md-3 fw-bold fs-6';
            case 'FOUR':
                return 'row-cols-md-4';
            case 'TWO':
                return 'row-cols-md-2';
            case 'ONE':
                return 'row-cols-md-1';
            default:
                return state;
        }
    };
    const [gridView, dispatch] = useReducer(viewReducer, 'row-cols-md-3');


    return (
        <>
            <section className="blog_image">
                <div className="carousel-item active d-flex flex-column align-items-center pt-sm-5 gap-2 mt-lg-5">
                    <div className="carosel_caption fw-medium d-flex gap-3">
                        <a href="#" className="text-decoration-none text-dark fw-bold">Home</a>
                        <img src={chevron_right_icon} alt="chevron_right_icon" />
                        <a href="#" className="text-decoration-none text-dark fw-bold">Blog</a>
                    </div>
                    <span className="h1 fw-bold">Our Blog</span>
                    <p>Home ideas and design inspiration</p>
                </div>
            </section>

            <section className="container d-flex justify-content-between p-3">
                <div className=" d-flex d-none d-md-block">
                    <a href="#" className="text-dark fw-bold ">All Blog</a>
                    <a href="#" className="fw-bold text-decoration-none text-secondary ps-4">Featured</a>
                </div>


                <div className="sort_container d-md-flex d-none d-md-block">

                    <div className="d-flex gap-2 align-items-baseline">
                        <p className="text-center fs-5">Sort by</p>
                        <img src={down_arrow} alt="down_arrow" />
                    </div>


                    <div className="d-flex ps-3">
                        <button onClick={() => dispatch({ type: 'THREE' })} className="border-1">
                            <img src={first_page_first_icon} alt="first_page_icon" />
                        </button>
                        <button onClick={() => dispatch({ type: 'FOUR' })} className="border-1">
                            <img src={first_page_second_icon} alt="first_page_icon" />
                        </button>
                        <button onClick={() => dispatch({ type: 'TWO' })} className="border-1">
                            <img src={first_page_third_icon} alt="first_page_icon" />
                        </button>
                        <button onClick={() => dispatch({ type: 'ONE' })} className="border-1">
                            <img src={first_page_fourth_icon} alt="first_page_icon" />
                        </button>
                    </div>

                </div>
                <div className="d-sm-block d-md-none ">
                    <select className="select_conainer p-2 shadow-none  border-2 rounded" >
                        <option>
                                All Blogs
                        </option>
                    </select>
                </div>

            </section>


            <ArticleList view={gridView} addArticle={showMore} />

            <div className="p-4 d-flex justify-content-center">
                {showMore ? (<button onClick={() => setShowMore(false)} className="btn shadow-none bg-white btn-rounded border-dark" >Show Less</button>) :
                    <button onClick={() => setShowMore(true)} className="btn shadow-none bg-white btn-rounded border-dark">Show More</button>}
            </div>


        </>

    )
}
export default BlogMain;