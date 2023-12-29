import "../Footer/footer.css"
import mail_icon from "../../assets/icons/mail_icon.svg";
import footer_logo_image from "../../assets/images/footer_logo_image.svg";
import instagram from "../../assets/icons/instagram_icon.svg";
import facebook from "../../assets/icons/facebook_icon.svg";
import youtube from "../../assets/icons/youtube_icon.svg";

const Footer = () => {
    return (
        <>
            <div className="newsletter_container">
                <div className="newsletter_content d-flex flex-column  align-items-center py-4 px-2 justify-content-center">
                    <span className="h3">Join Our Newsletter</span>
                    <p className="text-center">Sign up for deals, new products an promotions</p>
                    <div className="email border-0 border-bottom border-dark d-flex">
                        <img src={mail_icon} alt="mail" />
                        <input type="email" placeholder="Email Address" className="form-control border-0 no-outline shadow-none" />
                        <button className="border-0">Signup</button>
                    </div>
                </div>
            </div>

            <section className="footer_main container-fluid bg-dark d-flex flex-column p-5">


                <div className="d-flex  justify-content-lg-between border-bottom border-light align-items-center flex-wrap flex-sm-wrap  justify-content-center px-2 py-3 ">
                    <div className="d-flex gap-4 flex-wrap flex-xs-wrap justify-content-center align-items-start">
                        <img src={footer_logo_image} alt="footer_logo_image" />
                        <p className="text-white">Gift & Decoration Store</p>
                    </div>
                    <div className="navbar text-white gap-4 fs-5 d-flex flex-wrap  flex-sm-wrap align-items-center justify-content-md-center px-5 justify-content-center pb-4">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Shop</a>
                        <a className="nav-link" href="#">Product</a>
                        <a className="nav-link" href="#">Blog</a>
                        <a className="nav-link" href="#">Contact Us</a>
                    </div>
                </div>

                <div className="contact_apps d-flex flex-wrap-reverse  justify-content-md-between justify-content-center pt-4 align-items-end">
                    <div className="navbar text-white gap-2 fs-6 text-center d-flex align-items-start flex-wrap justify-content-center">
                        <p>Copyright © 2023 3legant. All rights reserved </p>
                        <a href="#" className="nav-link fw-medium">Privacy Policy</a>
                        <a href="#" className="nav-link fw-medium">Terms of Use</a>
                    </div>
                    <div className=" navbar text-white gap-3">
                        <a href="#" className="nav-link">
                            <img src={instagram} alt="instagram" className=" img-fluid" />
                        </a>
                        <a href="#" className="nav-link">
                            <img src={facebook} alt="facebook" className=" img-fluid" />
                        </a>
                        <a href="#" className="nav-link">
                            <img src={youtube} alt="youtube" className=" img-fluid" />
                        </a>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Footer;