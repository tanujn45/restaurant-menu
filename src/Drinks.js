import React, { useState } from "react";
import { data } from "./drinksdata";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper/core";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import logo from "./img/logo.png";
import logopishori from "./img/logopishori.jpeg";

import carouselPic1 from "./img/carousel/Pishori_pic1.png";
import carouselPic2 from "./img/carousel/Pishori_pic2.png";
import carouselPic3 from "./img/carousel/Pishori_pic3.png";
import carouselPic4 from "./img/carousel/Pishori_pic4.png";
SwiperCore.use([Pagination, Autoplay, EffectFade]);
const Drinks = () => {
  const [drinks, Setdrinks] = useState(data);
  console.log(drinks);
  return (
    <>
      <section>
        <div className="container">
          <div className="text-center text-uppercase my-3 logo-pishori">
            <img src={logopishori} alt="PISHORI DHABA" className="img-fluid" />
          </div>

          <Swiper loop autoplay id="carousel-swiper">
            <SwiperSlide>
              <img
                src={carouselPic1}
                alt="Paneer Tikka"
                className="img-fluid rounded mb-4 w-100"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={carouselPic2}
                alt="Paneer Tikka"
                className="img-fluid rounded mb-4 w-100"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={carouselPic3}
                alt="Paneer Tikka"
                className="img-fluid rounded mb-4 w-100"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={carouselPic4}
                alt="Paneer Tikka"
                className="img-fluid rounded mb-4 w-100"
              />
            </SwiperSlide>
          </Swiper>
          <div className="accordion">
            {drinks.map((drink) => (
              <div key={drink.c_id} className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button collapsed p-0 pe-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#panelsStayOpen-collapse" + drink.c_id}
                    aria-expanded="true"
                    aria-controls={"panelsStayOpen-collapse" + drink.c_id}
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={drink.c_img}
                        alt="Soups"
                        className="img-fluid menu-img rounded me-3"
                      />
                      <h4 className="mb-0">{drink.category}</h4>
                    </div>
                  </button>
                </h2>
                <div
                  id={"panelsStayOpen-collapse" + drink.c_id}
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <div className="row align-items-center">
                      {drink.items.map((obj) => (
                        <>
                          <div className="col-10 mb-3 d-inline-flex align-items-center">
                            <h5 className="mb-0 text-capitalize">{obj.name}</h5>
                            <h6 className="mb-0 text-capitalize">
                              {obj.name_s}
                            </h6>
                          </div>
                          <div
                            className={`col-2 mb-3 ${
                              obj.p_large.length < 7 ? "text-nowrap" : ""
                            }`}
                          >
                            <h6>&#x20B9; {obj.p_large}</h6>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="d-flex align-items-center justify-content-center text-nowrap">
          <p className="mb-0 me-1">Developed with &hearts; by</p>
          <img src={logo} alt="Logo" className="w-logo img-fluid" />
        </div>
      </footer>
    </>
  );
};
export default Drinks;
