import { useState } from "react";
import "../Product/productDisplay.scss";
import {
    chevron_right_icon,
    star,
    heart_icon,
    down_arrow
} from "../../../assets/resources/icons";
import {
    first_traytable,
    second_traytable,
    third_traytable,
    fourth_traytable,
    fifth_traytable,
    sixth_traytable,
    black_tray,
    red_tray, grey_tray,
    white_tray,
    sofia_image,
    jensen_image,
    nicolas_image
} from "../../../assets/resources/images";

const ProductMain = (props : any) => {
    const [showInfo, setShowInfo] = useState(false);
    const [showReviews, setShowReviews] = useState(false);
    const infoClick = () => {
        setShowInfo(!showInfo);
    }
    const reviewClick = () => {
        setShowReviews(!showReviews);
    }
    const {product} = props;
    return (
        <>
            {/* <nav className="navigation_page container p-3">
                <a href="#" className="text-decoration-none text-dark">Home</a>
                <img src={chevron_right_icon} alt="chevron_right" />
                <a href="#" className="text-decoration-none text-dark">Shop</a>
                <img src={chevron_right_icon} alt="chevron_right" />
                <a href="#" className="text-decoration-none text-dark">Living Room</a>
                <img src={chevron_right_icon} alt="chevron_right" />
                <a href="#" className="text-decoration-none text-dark"><b>Product</b></a>
            </nav> */}
            <section className="container product_container">
                <div className="row d-flex flex-wrap">
                    <div className=" col-lg-7 col-md-6 col-sm-12 d-flex flex-md-wrap flex-sm-wrap">
                        <div className="card-body product_images">
                            <img src={first_traytable} alt="first_traytable_image" className="img-fluid" id="traytable_images" />
                            <img src={second_traytable} alt="second_traytable_image" className="img-fluid product_items" />
                            <img src={third_traytable} alt="third_traytable_image" className="img-fluid product_items" />
                            <img src={fourth_traytable} alt="fourth_traytable_image" className="img-fluid product_items" />
                            <img src={fifth_traytable} alt="fifth_traytable_image" className="img-fluid product_items" />
                            <img src={sixth_traytable} alt="sixth_traytable_image" className="img-fluid product_items" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6  col-sm-12 ">
                        <div className="product_details card-body d-flex flex-column gap-2">
                            <div className="d-flex align-items-baseline gap-3">
                                <img src={star} alt="star" />
                                <p className="fs-5 fw-medium text-dark">11 Reviews</p>
                            </div>
                            <span className="h2 fw-bold">Tray Table</span>
                            <p>Buy one or buy a few and make every space where you sit more
                                convenient. Ligt and easy to move around with removable tray
                                top, handy for serving snacks.</p>
                            <div className="product_price d-flex gap-3 border-bottom">
                                <span className="h5 fw-bold">$199.00</span>
                                <span className="h5 text-muted fw-bold" id="actual_price">$400.00</span>
                            </div>
                            <p className="fw-bold">Measurements</p>
                            <span className="h6">17 1/2 x 20 5/8 "</span>
                            <div className="choose_color d-flex align-items-baseline">
                                <p className="fw-bold">Choose color</p>
                                <img src={chevron_right_icon} alt="chevron_right" />
                            </div>
                            <h5>Black</h5>
                            <div className="product_color_variety">
                                <img src={black_tray} alt="black_tray" />
                                <img src={grey_tray} alt="grey_tray" />
                                <img src={red_tray} alt="red_tray" />
                                <img src={white_tray} alt="white_tray" />
                            </div>
                            <div className="d-flex">
                                <div className="input-group pt-3">
                                    <button className="border-0 rounded">
                                        <input type="button" className="button-minus border-0" value="-" />
                                        <input type="text" className="border-0 text-center" value="1" />
                                        <input type="button" className="button-plus border-0" value="+" />
                                    </button>
                                </div>
                                <button type="button" className="btn btn-light d-flex gap-2 w-100 justify-content-center mt-3 pt-2 ">
                                    <img src={heart_icon} alt="heart_icon" className="heart_icon" />
                                    <span className="h6 fw-bold">Wishlist</span>
                                </button>
                            </div>
                            <button type="button" className="btn btn-light d-flex gap-2 w-100 justify-content-center mt-3 pt-2 bg-dark ">
                                <span className="h6 text-white">Add to Cart</span>
                            </button>
                            <div className="sku_and_category pt-4">
                                <div className="sku d-flex fw-bold">
                                    <p>SKU</p>
                                    <span className="h6">1117</span>
                                </div>
                                <div className="category d-flex gap-5 fw-bold">
                                    <p>CATEGORY</p>
                                    <span className="h6">Living Room, Bedroom</span>
                                </div>
                            </div>
                            <div className="info_heading d-flex justify-content-between border-bottom">
                                <span className="h5">Additional Info</span>
                                <button className="bg-white border-0" onClick={infoClick}><img src={down_arrow} alt="down_arrow" /> </button>
                            </div>
                            {showInfo &&
                                <div>
                                    <p className="fw-medium fs-5">Details</p>
                                    <p>You can use the removable tray for serving. The design makes it easy to put the tray
                                        back after use since you place it directly on the table frame without having to fit it into any holes.</p>
                                    <div className="packaging">
                                        <p className="fw-medium fs-5">Packaging</p>
                                        <h6>Width: 20 " Height: 1 ½ " Length: 21 ½ "</h6>
                                        <h6>Weight: 7 lb 8 oz</h6>
                                        <h6>Package(s): 1</h6>
                                    </div>
                                </div>
                            }
                            <div className="questions d-flex justify-content-between border-bottom">
                                <span className="h5">Questions</span>
                                <button className="bg-white border-0"><img src={down_arrow} alt="down_arrow" /></button>
                            </div>


                            <div className="reviews_list d-flex justify-content-between border-bottom">
                                <span className="h5">Reviews(11)</span>
                                <button className="bg-white border-0" onClick={reviewClick}><img src={down_arrow} alt="down_arrow" /></button>
                            </div>
                            {showReviews &&
                                <section>
                                    <div className="d-flex gap-2 p-3">
                                        <div>
                                            <img src={sofia_image} alt="review_image" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="h4">Sofia Harvertz</span>
                                            <img src={star} alt="star" className="star" />
                                            <p>I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2 p-3">
                                        <div>
                                            <img src={nicolas_image} alt="review_image" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="h4">Nicolas Jensen</span>
                                            <img src={star} alt="star" className="star" />
                                            <p>I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2 p-3">
                                        <div>
                                            <img src={jensen_image} alt="review_image" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="h4">Jensen</span>
                                            <img src={star} alt="star" className="star" />
                                            <p>I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
                                        </div>
                                    </div>
                                </section>
                            }

                        </div>
                    </div>
                </div>
            </section>
      
            

        </>
    )
}
export default ProductMain;