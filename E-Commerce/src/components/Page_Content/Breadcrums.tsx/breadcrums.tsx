import React from 'react'
import { arrow_right_icon } from '../../../assets/resources/icons';

const BreadCrums = (props : any) => {
    const {product} = props;
  return (
    <div>
        Home <img src={arrow_right_icon} alt="right_icon" /> Product 
        </div>
  )
}

export default BreadCrums;