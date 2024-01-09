import React from 'react'
import {
    cart_one_dark,
    cart_two_light, 
    cart_three_light
} from '../../../assets/resources/icons'

const CartHeader = () => {
    return (
        <section className='d-flex flex-column gap-3'>
            <span className="h1 fw-bold text-center">Cart</span>
            <div className='d-flex justify-content-center gap-5'>
                <div className='d-flex gap-2 align-items-center'>
                    <img src={cart_one_dark} alt="cart_one_dark" className='cart_image' />
                    <span className='h5'>Shopping cart</span>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                    <img src={cart_two_light} alt="cart_two_light" className='cart_image' />
                    <span className='h5'>Checkout details</span>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                    <img src={cart_three_light} alt="cart_three_light"  className='cart_image'/>
                    <span className='h5'>Order complete</span>
                </div>
            </div>

        </section>
    )
}

export default CartHeader