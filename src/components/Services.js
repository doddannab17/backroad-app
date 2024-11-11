import React from "react";

import { services } from "../data";
import Title from "./Title";

const Services = () => {
  return (
    <div>
      <Title title={"our"} subTitle={"Services"} />
      <section className="section services" id="services">
        <div className="section-center services-center">
          {services.map((service) => {
            const { icon, title, text, id } = service;
            return (
              <article className="service">
                <span className="service-icon">
                  <i className={icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
