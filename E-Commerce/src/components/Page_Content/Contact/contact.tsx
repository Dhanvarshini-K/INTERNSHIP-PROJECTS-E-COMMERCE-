import '../Contact/contact.scss'
import {
    chevron_right_icon,
    address_icons,
    email_icons,
    contact_icons
} from '../../../assets/resources/icons';
import AboutUs from '../../Common_Functionality/SaleUp_Card/aboutus';
import CardItem from '../../Common_Functionality/Service_Card/card';



const Contact = () => {
    return (

        <>

            <section className="container">
                <div className="header_links p-3">
                    <a href="#" className="text-decoration-none text-dark">Home</a>
                    <img src={chevron_right_icon} alt="chevron_right_icon" />
                    <a href="#" className="text-decoration-none text-dark"><b>Contact</b></a>
                </div>
                <div className=" d-flex flex-column gap-1">
                    <span className="h1 d-block fw-bold">We believe in sustainable decor.</span>
                    <span className="h1 fw-bold">We’re passionate about life at home.</span>
                    <p>Our features timeless furniture, with natural fabrics, curved lines,
                        plenty of mirrors and classNameic design,
                        which can be incorporated into any
                        decor project. The pieces enchant for
                        their sobriety, to last for generations,
                        faithful to the shapes of each period,
                        with a touch of the present</p>
                </div>
            </section>

           <AboutUs/>
            <section className="container p-4">
                <span className="h1 d-flex justify-content-center">Contact Us</span>
                <div className=" card-deck d-flex justify-content-between gap-3 align-self-center align-items-stretch flex-wrap p-4">
                    <div className=" card card-body d-flex align-items-center gap-2 border-0 bg-light">
                        <img src={address_icons} alt="address_icon" className='details' />
                        <span className="h5 fw-bold">ADDRESS</span>
                        <span className="h6">234 Hai Trieu,Ho Chi Minh City,</span>
                        <span className='h6'>Viet Nam</span>
                    </div>
                    <div className="contact_container card card-body d-flex gap-2 align-items-center bg-light border-0">
                        <img src={contact_icons} alt="contact" />
                        <span className="h5 fw-bold">CONTACT US</span>
                        <span className="h6">+84 234 567 890</span>
                    </div>
                    <div className="mail_container card card-body d-flex gap-2 align-items-center border-0 bg-light"
                    >
                        <img src={email_icons} alt="email_icon" />
                        <span className="h5 fw-bold">EMAIL</span>
                        <span className="h6">hello@3legant.com</span>
                    </div>
                </div>
            </section>


            <section className='container text-center mb-4'>
                <div className='row d-flex gap-3'>
                    <div className='col-12 col-md-4'>
                        <form className="d-flex flex-column gap-4">
                            <div className="form-group d-flex flex-column align-items-start gap-2">
                                <label className="fw-medium">FULL NAME</label>
                                <input type="text" className="form-control w-100 shadow-none" placeholder="Your Name" />
                            </div>
                            <div className="form-group d-flex flex-column align-items-start gap-2">
                                <label className="fw-medium">EMAIL ADDRESS</label>
                                <input type="email" className="form-control shadow-none" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group d-flex flex-column align-items-start gap-2">
                                <label className="fw-medium">MESSAGE</label>
                                <input type="text" className="form-control message_field shadow-none" />
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                    <div className='col-12 col-md-7'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl'
                            className='h-100 w-100 location_image'
                            loading='lazy'
                        ></iframe>
                    </div>
                </div>
            </section>

            <CardItem/>
        </>
    )
}

export default Contact;