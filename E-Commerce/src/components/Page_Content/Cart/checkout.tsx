import React from 'react'
import CartHeader from './cart_header'
import { paycard, ticket_percent } from '../../../assets/resources/icons';
import { cartItems } from '../../Functionality_Data/Cart_item';

const Checkout = () => {
    const renderCheckOut = cartItems.map((checkOut) => {
        return (

            <section className='d-flex gap-4 justify-content-center border-bottom pb-3'>
                <div className='pt-2'>
                    <img src={checkOut.image} alt="cart_image" />
                </div>
                <div className='d-flex flex-column pt-2 gap-1'>
                    <span className='fw-bold'>{checkOut.title}</span>
                    <span>color:{checkOut.color}</span>
                    <button className='quantity_button border border-1 border-dark rounded bg-transparent'>
                        <input type="button" value="-" className="button-minus border-0 rounded bg-transparent" data-field="quantity" />
                        <input type="text" step="1" max="10" value="1" name="quantity" className="quantity-field border-0 text-center w-25" />
                        <input type="button" value="+" className="button-minus border-0 rounded bg-transparent" data-field="quantity" />
                    </button>
                </div>
                <div className='d-flex align-items-center'>
                    <span className='fw-bold'>$38.00</span>
                </div>
            </section>
        )
    })
    return (
        <>
            <CartHeader />
            <section className='container '>
                <div className='row d-flex gap-md-4 mx-3'>
                    <div className='col-12 col-md-5  my-5 d-flex gap-3 flex-column'>
                        <div className='row p-3 border-1 border-secondary border rounded d-flex gap-3'>
                            <span className='h5 fw-bold'>Contact Information</span>
                            <form className='d-flex flex-column gap-2'>
                                <div className="form-row d-flex gap-2">
                                    <div className="form-group col-md-6">
                                        <label className='fw-bold text-secondary'>First Name</label>
                                        <input type="text" className="form-control border-dark shadow-none" placeholder="First name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className='fw-bold text-secondary'>Last Name</label>
                                        <input type="text" className="form-control border-dark shadow-none" placeholder="Last name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className='fw-bold text-secondary'>Phone Number</label>
                                    <input type="number" className="form-control border-dark shadow-none" placeholder="Phone number" />
                                </div>
                                <div className="form-group">
                                    <label className='fw-bold text-secondary'>Email Address</label>
                                    <input type="email" className="form-control border-dark shadow-none" placeholder="Your email" />
                                </div>
                            </form>
                        </div>
                        <div className='row p-3 border-1 border-secondary border rounded d-flex gap-3'>
                            <span className='h5 fw-bold'>Shipping Address</span>
                            <form className='d-flex flex-column gap-2'>
                                <div className="form-group">
                                    <label className='fw-bold text-secondary'>STREET ADDRESS</label>
                                    <input type="text" className="form-control border-dark shadow-none" placeholder="Street Address" />
                                </div>
                                <div className="form-group">
                                    <label className='fw-bold text-secondary'>Country</label>
                                    <input type="text" className="form-control border-dark shadow-none" placeholder="Country" />
                                </div>
                                <div className="form-group">
                                    <label className='fw-bold text-secondary'>TOWN/CITY</label>
                                    <input type="text" className="form-control border-dark shadow-none" placeholder="Town / City" />
                                </div>
                                <div className="form-row d-flex gap-2">
                                    <div className="form-group col-md-6">
                                        <label className='fw-bold text-secondary'>STATE</label>
                                        <input type="text" className="form-control border-dark shadow-none" placeholder='State' />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className='fw-bold text-secondary'>ZIP CODE</label>
                                        <input type="text" className="form-control border-dark shadow-none" placeholder='Zip code' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input shadow-none" type="checkbox" />
                                        <label className="form-check-label">
                                            Use a different billing address(Optional)                                            </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='row p-3 border-1 border-secondary border rounded d-flex gap-3'>
                            <span className='h5 fw-bold'>Payment method</span>
                            <div className='border-bottom border-1 border-secondary d-flex flex-column gap-3 pb-4'>
                                <button className='border border-1  border-secondary p-2 bg-transparent'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex gap-2'>
                                            <input type="radio" name="card" />

                                            <span>Pay by Card credit</span>
                                        </div>
                                        <img src={paycard} alt="paycard" />
                                    </div>
                                </button>
                                <button className='border border-1  border-secondary p-2 bg-transparent'>
                                    <div className='d-flex gap-2'>
                                        <input type="radio" name="card" />
                                        <span>Paypal</span>
                                    </div>
                                </button>
                            </div>
                            <div className="form-group">
                                <label className='fw-bold text-secondary'>CARD NUMBER</label>
                                <input type="text" className="form-control border-dark shadow-none" placeholder="1234 1234 1234" />
                            </div>
                            <div className="form-row d-flex gap-2">
                                <div className="form-group col-md-6">
                                    <label className='fw-bold text-secondary'>EXPIRATION DATE</label>
                                    <input type="date" className="form-control border-dark shadow-none" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className='fw-bold text-secondary'>CVV</label>
                                    <input type="text" className="form-control border-dark shadow-none" placeholder='CVV code' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='order_summary col-12 col-md-6  py-3 border rounded border-dark my-5 d-flex flex-column gap-2'>
                        <span className='h4 fw-bold'> Order Summary </span>
                        {renderCheckOut}
                        <div className='d-flex gap-2'>
                            <input type="text" placeholder='Input' className='w-75 p-2 rounded border border-dark outline-0 shadow-none' />
                            <button className='border-0 rounded bg-dark text-white py-2 px-3'>Apply</button>
                        </div>
                        <div className='d-flex justify-content-between border-bottom p-2'>
                            <div className='d-flex gap-2 align-items-start'>
                                <img src={ticket_percent} alt="ticket_percent" />
                                <span className='h5 fs-5'>JenkateMW</span>
                            </div>
                            <div>
                                <span className='text-success fw-bold'>-$25.00</span>
                                <button className='text-success fw-bold border-0 bg-transparent'>[Remove]</button>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between border-bottom p-2'>
                            <span>Shipping</span>
                            <span className='fw-bold'>Free</span>
                        </div>
                        <div className='d-flex justify-content-between border-bottom p-2'>
                            <span>Subtotal</span>
                            <span className='fw-bold'>$99.00</span>
                        </div>
                        <div className='d-flex justify-content-between p-2'>
                            <span>Total</span>
                            <span className='fw-bold'>$234.00</span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Checkout;