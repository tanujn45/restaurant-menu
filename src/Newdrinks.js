import React, { useState } from "react";
import logo from "./img/logo.png";
import logopishori from "./img/logopishori.jpeg";
import { drinkdata } from "./drinksdata";
import { fooddata } from "./fooddata";

import beer from "./img/beer.jpg";
import wine from "./img/wine.jpg";
import mocktails from "./img/mocktails.jpg";
import whiskey from "./img/whiskey.jpg";

import carouselPic1 from "./img/carousel/Pishori_pic1.png";
import carouselPic2 from "./img/carousel/Pishori_pic2.png";
import carouselPic3 from "./img/carousel/Pishori_pic3.png";
import carouselPic4 from "./img/carousel/Pishori_pic4.png";
import veg from "./img/veg.png";
import nveg from "./img/nveg.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper/core";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const NewDrinks = () => {
  const [drinks, Setdrinks] = useState(drinkdata);
  const [foodMenu, setFoodMenu] = useState(fooddata);
  return (
    <>
      <section>
        <div className="container">
          <br></br>
          <div className="text-center text-uppercase mt-3 mb-5 logo-pishori">
            <img src={logopishori} alt="PISHORI DHABA" className="img-fluid" />
          </div>
        </div>
      </section>
      {/* botstrap navs and tabs */}
      <div class="container">
        <div class="tab-content container">
          <ul class="nav-pills nav nav-fill">
            <li class="nav-item active me-2">
              <a href="#foodtab" class="nav-link" data-toggle="tab">
                Food
              </a>
            </li>
            <li class="nav-item ms-2">
              <a href="#drinktab" class="nav-link" data-toggle="tab">
                Liquor
              </a>
            </li>
          </ul>
          <div class="tab-pane active" id="foodtab">
            <br></br>

            <Swiper loop autoplay className="carousel-swiper">
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
              {foodMenu.map((data) => (
                <div key={data.c_id} className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button collapsed p-0 pe-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#panelsStayOpen-collapse" + data.c_id}
                      aria-expanded="true"
                      aria-controls={"panelsStayOpen-collapse" + data.c_id}
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src={data.c_img}
                          alt="Soups"
                          className="img-fluid menu-img rounded me-3"
                        />
                        <h4 className="mb-0 category-heads">{data.category}</h4>
                      </div>
                    </button>
                  </h2>

                  <div
                    id={"panelsStayOpen-collapse" + data.c_id}
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body">

                      <div className="row align-items-center">
                        <div className="col-9 mb-3 d-inline-flex align-items-center">

                        </div>
                        <div className="col-3 mb-3 newprice" >
                        <h6 className="food-menu-price newprice1" >
                          cost ( in &#x20B9; )
                              </h6>
                        </div>
                      </div>

                      <div className="row align-items-center">
                        {data.items.map((food) => (
                          <>
                            <div className="col-9 mb-3 d-inline-flex align-items-center">
                              {food.vn === "veg" ? (
                                <img src={veg} alt="veg" className="vnveg" />
                              ) : (
                                <img src={nveg} alt="nveg" className="vnveg" />
                              )}
                              <h5 className="mb-0 text-capitalize food-menu-item">
                                {food.name}
                              </h5>
                            </div>
                            <div
                              className={`col-3 mb-3  ${
                                food.price.length < 7 ? "text-nowrap" : ""
                              }`}
                            >
                              {console.log(food.price.length)}
                              <h6 className="food-menu-price">
                                {food.price}
                              </h6>
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

          <div class="tab-pane" id="drinktab">
            <br></br>
            <Swiper loop autoplay className="carousel-swiper">
              <SwiperSlide>
                <img
                  src={beer}
                  alt="Paneer Tikka"
                  className="img-fluid rounded mb-4 w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={whiskey}
                  alt="Paneer Tikka"
                  className="img-fluid rounded mb-4 w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={mocktails}
                  alt="Paneer Tikka"
                  className="img-fluid rounded mb-4 w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={wine}
                  alt="Paneer Tikka"
                  className="img-fluid rounded mb-4 w-100"
                />
              </SwiperSlide>
            </Swiper>
            <div className="accordion">
              {drinks.map((drink) => (
                <div key={drink.c_id} className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
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
                        <h4 className="mb-0 category-heads">
                          {drink.category}
                        </h4>
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
                        <div className="col-9 mb-3 d-inline-flex align-items-center">

                        </div>
                        <div className="col-3 mb-3 newprice" >
                        <h6 className="food-menu-price newprice1 " >
                          cost ( in &#x20B9; )
                              </h6>
                        </div>
                      </div>

                      <div className="row align-items-center">
                        {drink.items.map((obj) => (
                          <>
                            <div className="col-9 mb-3 d-inline-flex align-items-center">
                              <div>

                              <h5 className="mb-0 text-capitalize food-menu-item">
                                {obj.name}
                              </h5>
                              <h6 className="mb-0 text-capitalize food-menu-subitem">
                                {obj.name_s}
                              </h6>
                              </div>
                            </div>

                            {console.log(obj.p_large.length)}
                            <div className={`col-3 mb-3 ${obj.p_large.length<7 ? "text-nowrap  ":""}`}>
                              
                              <h6 className="food-menu-price">
                                 {obj.p_large}
                              </h6>
                            </div>
                            {/* <div
                            
                              className={`col-2 mb-3 ${
                                obj.p_large.length < 7 ? "text-nowrap" : ""
                              } drink-price`}
                            >
                              <h6 className="food-menu-price">
                                &#8377;{obj.p_large}
                              </h6>
                            </div> */}
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bootstrap navs and tabs end */}
      <footer id="footer">
        <div className="d-flex align-items-center justify-content-center text-nowrap">
          <p className="mb-0 me-1">Developed with &hearts; by</p>
          <img src={logo} alt="Logo" className="w-logo img-fluid" />
        </div>
      </footer>
    </>
  );
};

export default NewDrinks;
