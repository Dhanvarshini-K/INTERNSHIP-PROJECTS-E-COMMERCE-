import "../Home/home.css"
import {
    slider_images,
    livingroom_image,
    bedroom_images,
    kitchen_images
} from "../../assets/resources/images";
import { arrow_right_icon } from "../../assets/resources/icons";
import { Link } from "react-router-dom";


const HomePageMain = () => {
    return (
        <>
            <figure className="homepage_background_image">
                <img src={slider_images} alt="slider_section" />
            </figure>

            <section className="container d-flex flex-row align-items-center justify-content-between flex-wrap pb-3">
                <div className="text-justify  d-flex flex-column h1">
                    <span className="h1 fw-bold">Simply Unique /</span>
                    <span className="h1 fw-bold">Simply Better .</span>
                </div>
                <p><b>3legant</b> is a gift & decorations stored based in HCMC, vietnam. Est since 2019.</p>
            </section>


            <section className="product_container container d-flex justify-content-between gap-5 flex-wrap">

                <div className=" product_items col-md-6">
                    <img src={livingroom_image} alt="test" className="img-responsive img-fluid" />
                    <div className="carousel-item active d-flex flex-column ps-5 pt-4">
                        <span className="text-dark fw-bold h2">Living Room</span>
                        <div className="link border-bottom border-dark">
                            <a href="#" className="fw-bold text-decoration-none text-dark">Shop Now</a>
                            <img src={arrow_right_icon} alt="arrow_right" />
                        </div>
                    </div>
                </div>

                <div className=" category_product col-md-5 d-flex gap-5 flex-column">
                    <div className=" product_items col">
                        <img src={bedroom_images} alt="test" className="img-responsive img-fluid" />
                        <div className="carousel-item active pt-4 ps-4 ">
                            <span className="text-dark fw-bold h2">BedRoom</span>
                            <div className="link border-bottom border-dark">
                                <a href="#" className="fw-bold text-decoration-none text-dark">Shop Now</a>
                                <img src={arrow_right_icon} alt="arrow_right" />
                            </div>
                        </div>
                    </div>
                    <div className=" product_items col">
                        <img src={kitchen_images} alt="test" className="img-responsive img-fluid" />
                        <div className="carousel-item active pt-4 ps-4">
                            <span className="text-dark fw-bold h2">Kitchen</span>
                            <div className="link border-bottom border-dark">
                                <a href="#" className="fw-bold text-decoration-none text-dark">Shop Now</a>
                                <img src={arrow_right_icon} alt="arrow_right" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="new_arrivals_container container d-flex justify-content-between    pt-4 align-items-center">
                <div className="new_arrivals d-flex flex-column">
                    <span className="h3 fw-bold">New</span>
                    <span className="h3 fw-bold">Arrivals</span>
                </div>
                <div className="link d-flex align-items-center border-bottom border-dark">
                    <Link to="/shop" className="fw-medium text-decoration-none text-dark">MoreProducts</Link>
                    <img src={arrow_right_icon} alt="arrow_right" />
                </div>
            </section>




        </>
    )
}
export default HomePageMain;