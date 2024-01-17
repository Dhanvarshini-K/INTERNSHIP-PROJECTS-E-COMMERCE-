import React from "react";
import "../SaleUp_card/saleup.scss";
import { saleUpList } from "../../Functionality_Data/saleup_data";

const AboutUs = () => {
  const renderDetail = saleUpList
    .filter((about) => {
      return about.id === 2;
    })
    .map((about) => {
      return (
        <section className="saleup_container  d-flex align-items-center flex-wrap flex-lg-nowrap gap-3 p-1">
          <img
            src={about.image}
            alt="sale_up"
            className="img-fluid saleup_image"
          />
          <div className="saleup_content d-flex flex-column px-5 py-3 gap-3">
            <span className="h3 fw-bold">{about.title}</span>
            <p>{about.description}</p>
            <div className="sale_up_link border-bottom border-dark">
              <a href="#" className="text-decoration-none text-dark fw-bold">
                {about.link}
              </a>
              <img src={about.icons} alt="arrow_right_icon" />
            </div>
          </div>
        </section>
      );
    });

  return <React.Fragment>{renderDetail}</React.Fragment>;
};

export default AboutUs;
