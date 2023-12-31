import React from "react";
import "./saleup.scss";
import { SaleUpList } from "../../Functionality_Data/saleup_data";

const SaleUpMain = () => {
    const RenderSaleUp = SaleUpList.filter((sale)=>{
        return(sale.id === 1)
    }).map((sale)=>{
        return(
            <section className="saleup_container  d-flex align-items-center flex-wrap flex-lg-nowrap gap-3 p-1">
            <img src={sale.image} alt="sale_up" className="img-fluid saleup_image" />
            <div className="saleup_content d-flex flex-column p-2">
                <span className="h5 text-primary">{sale.offer}</span>
                <span className="h2 fw-bold">{sale.title}</span>
                <p>{sale.description}</p>
                <div className="sale_up_link border-bottom border-dark">
                    <a href="#" className="text-decoration-none text-dark fw-bold">{sale.link}</a>
                    <img src={sale.icons} alt="arrow_right_icon" />
                </div>
            </div>
        </section>
        )
    })
    return (
        <React.Fragment>
        <div>{RenderSaleUp}</div>
        </React.Fragment>
    )
}
export default SaleUpMain;




