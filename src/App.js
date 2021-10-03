import React, { useState } from "react";


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper/core";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


import "./App.css";
import logo from "./img/logo.png";
import logopishori from './img/logopishori.jpeg'
import veg from "./img/veg.png";
import nveg from "./img/nveg.png";

import carouselPic1 from './img/carousel/Pishori_pic1.png';
import carouselPic2 from './img/carousel/Pishori_pic2.png';
import carouselPic3 from './img/carousel/Pishori_pic3.png';
import carouselPic4 from './img/carousel/Pishori_pic4.png';

SwiperCore.use([Pagination, Autoplay, EffectFade]);
function App() {
  const [foodMenu, setFoodMenu] = useState([
    {
      c_id: 1,
      c_img: "https://img3.exportersindia.com/product_images/bc-full/2018/8/4212458/indian-beverages-1535343937-4231216.jpeg",
      category: "COLD BEVERAGE",
      items: [
        {
          i_id: 1,
          vn: "veg",
          name: "MINERAL WATER",
          price: "30.00",
        },
        {
          i_id: 2,
          vn: "veg",
          name: "SODA",
          price: "25.00",
        },
        {
          i_id: 3,
          vn: "veg",
          name: "SOFT DRINK	",
          price: "30.00",
        },
        {
          i_id: 4,
          vn: "veg",
          name: "SOFT DRINK CAN",
          price: "30.00",
        },
        {
          i_id: 5,
          vn: "veg",
          name: "RED BULL",
          price: "150.00",
        },
        {
          i_id: 6,
          vn: "veg",
          name: "DIET COKE",
          price: "50.00",
        },
        {
          i_id: 7,
          vn: "veg",
          name: "FRESH LIME SODA	",
          price: "50.00",
        },
        {
          i_id: 8,
          vn: "veg",
          name: "FRESH LIME WATER",
          price: "40.00",
        },
        {
          i_id: 9,
          vn: "veg",
          name: "LASSI (SWEET OR SALTED)	",
          price: "40.00",
        },
        {
          i_id: 10,
          vn: "veg",
          name: "BUTTER MILK	",
          price: "40.00",
        },
        {
          i_id: 11,
          vn: "veg",
          name: "JAL JEERA WATER",
          price: "40.00",
        },
        {
          i_id: 12,
          vn: "veg",
          name: "JAL JEERA SODA",
          price: "50.00",
        },
      ],
    },
    {
      c_id: 2,
      c_img:
        "https://saladswithanastasia.com/wp-content/uploads/2020/10/GREEN-CORAL-SALAD-FEATURED-1.jpg",
      category: "SALAD",
      items: [
        {
          i_id: 1,
          vn: "veg",
          name: "GREEN SALAD",
          price: "50.00",
        },
        {
          i_id: 2,
          vn: "veg",
          name: "KACHUMBER SALAD",
          price: "60.00",
        },
        {
          i_id: 3,
          vn: "veg",
          name: "SOFT DRINK",
          price: "30.00",
        },
        {
          i_id: 4,
          vn: "veg",
          name: "DAHI KACHUMBER",
          price: "50.00",
        },
        {
          i_id: 5,
          vn: "veg",
          name: "PUNJABI SALAD",
          price: "60.00",
        },
        {
          i_id: 6,
          vn: "veg",
          name: "RUSSIAN SALAD",
          price: "80.00",
        },
        {
          i_id: 7,
          vn: "veg",
          name: "ONION SALAD",
          price: "20.00",
        },
        {
          i_id: 8,
          vn: "veg",
          name: "GREEN CHILLY FRY",
          price: "20.00",
        },
      ],
    },
    {
      c_id: 3,
      c_img:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/09/raita-500x500.jpg",
      category: "RAITA & CURD",
      items: [
        {
          i_id: 1,
          vn: "veg",
          name: "VEG RAITA",
          price: "80.00",
        },
        {
          i_id: 2,
          vn: "veg",
          name: "BOONDI RAITA",
          price: "80.00",
        },
        {
          i_id: 3,
          vn: "veg",
          name: "ONION RAITA",
          price: "80.00",
        },
        {
          i_id: 4,
          vn: "veg",
          name: "ALOO RAITA	",
          price: "70.00",
        },
        {
          i_id: 5,
          vn: "veg",
          name: "PINEPPLE  RAITA",
          price: "90.00",
        },
        {
          i_id: 6,
          vn: "veg",
          name: "FRUIT RAITA",
          price: "90.00",
        },
        {
          i_id: 7,
          vn: "veg",
          name: "PLAIN CURD",
          price: "50.00",
        },
      ],
    },
    {
      c_id: 4,
      c_img:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/vegetable-soup.jpg",
      category: "SOUP VEG.",
      items: [
        {
          i_id: 1,
          vn: "veg",
          name: "SWEET CORN SOUP",
          price: "70.00",
        },
        {
          i_id: 2,
          vn: "veg",
          name: "CREAM OF TOMATO SOUP",
          price: "70.00",
        },
        {
          i_id: 3,
          vn: "veg",
          name: "CREAM OF SPINACH SOUP",
          price: "70.00",
        },
        {
          i_id: 4,
          vn: "veg",
          name: "HOT-N-SOUR SOUP",
          price: "70.00",
        },
        {
          i_id: 5,
          vn: "veg",
          name: "MANCHOW SOUP",
          price: "70.00",
        },
        {
          i_id: 6,
          vn: "veg",
          name: "VEG. MINISTRONI SOUP",
          price: "70.00",
        },
        {
          i_id: 7,
          vn: "veg",
          name: "VE. WONTON SOUP",
          price: "70.00",
        },
        {
          i_id: 8,
          vn: "veg",
          name: "LEMON CORIANDER SOUP",
          price: " 70.00",
        },
        {
          i_id: 9,
          vn: "veg",
          name: "VEG CLEAR SOUP",
          price: "60.00",
        },
      ],
    },
    {
      c_id: 5,
      c_img:
        "https://im.rediff.com/getahead/2016/jan/13paya-soup.jpg",
      category: "SOUP NON VEG.",
      items: [
        {
          i_id: 1,
          vn: "nveg",
          name: "CHICKEN SWEET CORN SOUP",
          price: "90.00",
        },
        {
          i_id: 2,
          vn: "nveg",
          name: "CHICKEN CLEAR SOUP",
          price: "80.00",
        },
        {
          i_id: 3,
          vn: "nveg",
          name: "CHICKEN HOT-N-SOUR SOUP",
          price: "90.00",
        },
        {
          i_id: 4,
          vn: "nveg",
          name: "CHICKEN MANCHOW SOUP",
          price: "90.00",
        },
        {
          i_id: 5,
          vn: "nveg",
          name: "CREAM OF CHICKEN SOUP",
          price: "90.00",
        },
        {
          i_id: 6,
          vn: "nveg",
          name: "CHICKEN WONTON SOUP",
          price: "90.00",
        },
        {
          i_id: 7,
          vn: "nveg",
          name: "CHICKEN MINISTRON SOUP",
          price: "90.00",
        },
      ],
    },
    {
      c_id: 6,
      c_img:
        "https://i.ytimg.com/vi/usah4_l8yFk/mqdefault.jpg",
      category: "PAPAD/SNACKS",
      items: [
        {
          i_id: 1,
          vn: "veg",
          name: "PANEER PAKODA",
          price: "130.00",
        },
        {
          i_id: 2,
          vn: "veg",
          name: "KAJU FRY",
          price: "130.00",
        },
        {
          i_id: 3,
          vn: "veg",
          name: "VEG PAKODA",
          price: "90.00",
        },
        {
          i_id: 4,
          vn: "veg",
          name: "CHANA/GREEN PEAS ROAST",
          price: "90.00",
        },
        {
          i_id: 5,
          vn: "veg",
          name: "KALALI PAKODA",
          price: "90.00",
        },
        {
          i_id: 6,
          vn: "veg",
          name: "FINGER CHIPS",
          price: "80.00",
        },
        {
          i_id: 7,
          vn: "veg",
          name: "ALOO CHAT",
          price: "60.00",
        },
        {
          i_id: 8,
          vn: "veg",
          name: "PEANUT BUTTER/GARLIC FRY",
          price: "70.00",
        },
        {
          i_id: 9,
          vn: "veg",
          name: "PEANUT CHAT",
          price: "70.00",
        },
        {
          i_id: 10,
          vn: "veg",
          name: "PEANUT GARLIC CHILLY JEERA FRY",
          price: "80.00",
        },
        {
          i_id: 11,
          vn: "veg",
          name: "PLAIN PEANUT",
          price: "30.00",
        },
        {
          i_id: 12,
          vn: "veg",
          name: "GARLIC/GINGER FRY",
          price: "30.00",
        },
        {
          i_id: 13,
          vn: "veg",
          name: "PAPAD (FRY/DRY)MASALA",
          price: "30.00",
        },
        {
          i_id: 14,
          vn: "veg",
          name: "PAPAD (FRY/DRY)",
          price: "20.00",
        },
        {
          i_id: 15,
          vn: "veg",
          name: "CHEESE CANOPY",
          price: "140.00",
        },
      ],
    },
    {
      c_id: 7,
      c_img:
        "https://www.mozismenu.com/wp-content/uploads/2017/07/Veg-Hakka-Noodles-0-750x500.jpg",
      category: "CHINESE VEG",
      items: [
        {
          i_id: 1,
          vn: "veg",
          name: "PANEER CHILLY",
          price: "170.00",
        },
        {
          i_id: 2,
          vn: "veg",
          name: "PANEER 65",
          price: "170.00",
        },
        {
          i_id: 3,
          vn: "veg",
          name: "PANEER BLACK PEPPER",
          price: "170.00",
        },
        {
          i_id: 4,
          vn: "veg",
          name: "PANEER FINGER",
          price: "170.00",
        },
        {
          i_id: 5,
          vn: "veg",
          name: "PANEER LOLLYPOP",
          price: "170.00",
        },
        {
          i_id: 6,
          vn: "veg",
          name: "PANEER CHOTI BOT",
          price: "190.00",
        },
        {
          i_id: 7,
          vn: "veg",
          name: "PANEER SCEZWAN",
          price: "180.00",
        },
        {
          i_id: 8,
          vn: "veg",
          name: "VEG MANCHURIAN",
          price: "130.00",
        },
        {
          i_id: 9,
          vn: "veg",
          name: "VEG SPRING ROLL",
          price: "130.00",
        },
        {
          i_id: 10,
          vn: "veg",
          name: "VEG LOLLYPOP",
          price: "80.00",
        },
        {
          i_id: 11,
          vn: "veg",
          name: "PLAIN PEANUT",
          price: "140.00",
        },
        {
          i_id: 12,
          vn: "veg",
          name: "VEG GOLD COIN",
          price: "200.00",
        },
        {
          i_id: 13,
          vn: "veg",
          name: "VEG FINGER",
          price: "160.00",
        },
        {
          i_id: 14,
          vn: "veg",
          name: "VEG 65",
          price: "160.00",
        },
        {
          i_id: 15,
          vn: "veg",
          name: "VEG KOTHY",
          price: "140.00",
        },
        {
          i_id: 16,
          vn: "veg",
          name: "VEG BUTTER PEPPER",
          price: "170.00",
        },
        {
          i_id: 17,
          vn: "veg",
          name: "CRISPY CORN",
          price: "140.00",
        },

        {
          i_id: 18,
          vn: "veg",
          name: "DAYGON VEG GARLIC",
          price: "150.00",
        },
        {
          i_id: 19,
          vn: "veg",
          name: "CHANA CHILLY",
          price: "150.00",
        },
        {
          i_id: 20,
          vn: "veg",
          name: "CRISPY BABYCORN",
          price: "150.00",
        },

        {
          i_id: 21,
          vn: "veg",
          name: "VEG KOTHY",
          price: "140.00",
        },
        {
          i_id: 22,
          vn: "veg",
          name: "SCEZWAN CHILLY BABYCORN",
          price: "170.00",
        },
        {
          i_id: 23,
          vn: "veg",
          name: "CHILLY BABYCORN",
          price: "170.00",
        },
        {
          i_id: 24,
          vn: "veg",
          name: "CHILLY MUSHROOM	",
          price: "170.00",
        },
        {
          i_id: 25,
          vn: "veg",
          name: "MUSHROOM BABYCORN CHILLY",
          price: "190.00",
        },
        {
          i_id: 26,
          vn: "veg",
          name: "CHILLY COTTAEG CHEESE",
          price: "180.00",
        },
        {
          i_id: 27,
          vn: "veg",
          name: "POTATO 65",
          price: "140.00",
        },
        {
          i_id: 28,
          vn: "veg",
          name: "VEG AEMRICAN CHOUPSEY",
          price: "160.00",
        },

        {
          i_id: 29,
          vn: "veg",
          name: "VEG HAKKA NOODLES",
          price: "140.00",
        },
        {
          i_id: 30,
          vn: "veg",
          name: "VEG CHOWMIN",
          price: "140.00",
        },
        {
          i_id: 31,
          vn: "veg",
          name: "VEG FRIED RICE",
          price: "140.00",
        },
        {
          i_id: 32,
          vn: "veg",
          name: "VEG SCEZWAN FRIED RICE",
          price: "150.00",
        },
        {
          i_id: 33,
          vn: "veg",
          name: "VEG TRIPPLE FRIED RICE",
          price: "170.00",
        },
        {
          i_id: 34,
          vn: "veg",
          name: "VEG COMBINATION FRIED RICE",
          price: "170.00",
        },

        {
          i_id: 35,
          vn: "veg",
          name: "VEG ORIENTAL FRIED RICE",
          price: "170.00",
        },
      ],
    },

    {
      c_id: 8,
      c_img:
        "https://previews.123rf.com/images/indianfoodimages/indianfoodimages1901/indianfoodimages190101776/114795693-szechuan-chicken-which-is-a-popular-indo-chinese-non-vegetarian-recipe-served-in-a-plate-with-chilli.jpg",
      category: "CHINESE NON VEG",
      items: [
        {
          i_id: 1,
          vn: "nveg",
          name: "CHILLY CHICKEN",
          price: "F:370.00, H:210.00",
        },
        {
          i_id: 2,
          vn: "nveg",
          name: "CHICKEN 65",
          price: "F:370.00, H:220.00",
        },
        {
          i_id: 3,
          vn: "nveg",
          name: "CHICKEN RED PEPPER",
          price: "F:370.00, H:220.00",
        },
        {
          i_id: 4,
          vn: "nveg",
          name: "CHICKEN BLACK PEPPER	",
          price: "F:370.00, H:220.00",
        },
        {
          i_id: 5,
          vn: "nveg",
          name: "CHICKE MANCHURIAN",
          price: "F:370.00, H:220.00",
        },
        {
          i_id: 6,
          vn: "nveg",
          name: "CHICKEN MAKHMALI",
          price: "F:370.00, H:220.00",
        },
        {
          i_id: 7,
          vn: "nveg",
          name: "CHICKEN ZED PEPPER",
          price: "F:370.00, H:220.00",
        },
        {
          i_id: 8,
          vn: "nveg",
          name: "CHICKEN GARLIC/GINGER",
          price: "F:370.00, H:220.00",
        },
        {
          i_id: 9,
          vn: "nveg",
          name: "CHICKEN CRISPY",
          price: "F:370.00, H:220.00",
        },
        {
          i_id: 10,
          vn: "nveg",
          name: "CHICKEN BULET",
          price: "F:380.00, H:230.00",
        },
        {
          i_id: 11,
          vn: "nveg",
          name: "CHICKEN CRISPY SPE.(4PCS)",
          price: "240.00",
        },
        {
          i_id: 12,
          vn: "nveg",
          name: "CHICKEN POPCORN",
          price: "200.00",
        },
        {
          i_id: 13,
          vn: "nveg",
          name: "CHICKEN LOLLYPOP(6PCS)",
          price: "240.00",
        },
        {
          i_id: 14,
          vn: "nveg",
          name: "CHICKEN SPRING ROLL",
          price: "210.00",
        },
        {
          i_id: 15,
          vn: "nveg",
          name: "CHICKEN AEMRICAN CHOUPSEY",
          price: "260.00",
        },
        {
          i_id: 16,
          vn: "nveg",
          name: "CHICKEN NOODELS",
          price: "200.00",
        },
        {
          i_id: 17,
          vn: "nveg",
          name: "CHICKEN HAKKA NOODELS",
          price: "200.00",
        },

        {
          i_id: 18,
          vn: "nveg",
          name: "CHICKEN CHWOMIN",
          price: "200.00",
        },
        {
          i_id: 19,
          vn: "nveg",
          name: "FISH FINGER",
          price: "280.00",
        },
        {
          i_id: 20,
          vn: "nveg",
          name: "FISH CHILLY",
          price: "280.00",
        },

        {
          i_id: 21,
          vn: "nveg",
          name: "FISH CRISPY",
          price: "240.00",
        },
        {
          i_id: 22,
          vn: "nveg",
          name: "FISH GARLIC/GINGER",
          price: "260.00",
        },
        {
          i_id: 23,
          vn: "nveg",
          name: "AUSTALIAN GRILLED FISH",
          price: "280.00",
        },
        {
          i_id: 24,
          vn: "nveg",
          name: "GRILLED FISH",
          price: "280.00",
        },
        {
          i_id: 25,
          vn: "nveg",
          name: "PRAWNS CHILLY",
          price: "280.00",
        },
        {
          i_id: 26,
          vn: "nveg",
          name: "PRAWNS GOLDEN FRY",
          price: "280.00",
        },
        {
          i_id: 27,
          vn: "nveg",
          name: "CHICNKEN FRIED RICE ",
          price: "200.00",
        },
        {
          i_id: 28,
          vn: "nveg",
          name: "CHICKEN SCEZWAN RICE",
          price: "210.00",
        },

        {
          i_id: 29,
          vn: "nveg",
          name: "CHICKEN TRIPPLE FRIED RICE",
          price: "260.00",
        },
        {
          i_id: 30,
          vn: "nveg",
          name: "CHICKEN COMBINATION FRIED RICE",
          price: "240.00",
        },
        {
          i_id: 31,
          vn: "nveg",
          name: "CHICKEN ORIENTAL FRIED RICE",
          price: "250.00",
        },
        {
          i_id: 32,
          vn: "nveg",
          name: "CHICKEN CUISINE FRIED RICE",
          price: "240.00",
        },
        {
          i_id: 33,
          vn: "nveg",
          name: "PRAWNS FRIED RICE",
          price: "290.00",
        },
        {
          i_id: 34,
          vn: "nveg",
          name: "PRAWNS SCEZWAN RICE",
          price: "300.00",
        },

        {
          i_id: 35,
          vn: "nveg",
          name: "EGG CHILLY",
          price: "160.00",
        },

        {
          i_id: 36,
          vn: "nveg",
          name: "EGG FRIED RICE ",
          price: "150.00",
        },
      ],
    },
    {
      c_id: 9,
      c_img:
        "https://media-cdn.tripadvisor.com/media/photo-s/1b/38/9a/fc/your-fav-chicken-with.jpg",
      category: "SIZZLERS",
      items: [
        {
          i_id: 1,
          vn: "nveg",
          name: "CHICKEN STEAK SIZZLER",
          price: "300.00",
        },
        {
          i_id: 2,
          vn: "nveg",
          name: "VEG STEAK SIZZLER",
          price: "220.00",
        },
        {
          i_id: 3,
          vn: "nveg",
          name: "PANEER STEAK SIZZLER",
          price: "250.00",
        },

      ],
    },

    {
      c_id: 10,
      c_img:
        "https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2020/08/Soya-Kebab-.jpg?fit=640%2C355&ssl=1",
      category: "VEG KABEB",
      items: [
        {
          i_id: 1,
          vn: "veg",
          name: "TANDOORI VEG PLATTER",
          price: "320.00",
        },
        {
          i_id: 2,
          vn: "veg",
          name: "PANEER TIKKA(8PCS)",
          price: "160.00",
        },
        {
          i_id: 3,
          vn: "veg",
          name: "PANEER MALAI TIKKA",
          price: "200.00",
        },
        {
          i_id: 4,
          vn: "veg",
          name: "PANEER PAHADI TIKKA",
          price: "190.00",
        },
        {
          i_id: 5,
          vn: "veg",
          name: "PANEER ACHARI TIKKA",
          price: "180.00",
        },
        {
          i_id: 6,
          vn: "veg",
          name: "PANEER TAKATAK",
          price: "170.00",
        },
        {
          i_id: 7,
          vn: "veg",
          name: "BOTI PANEER",
          price: "60.00",
        },
        {
          i_id: 8,
          vn: "veg",
          name: "BOTI MUSHROOM",
          price: "170.00",
        },
        {
          i_id: 9,
          vn: "veg",
          name: "MUSHROOM TIKKA",
          price: "160.00",
        },
        {
          i_id: 10,
          vn: "veg",
          name: "VEG SHEEK KABEB",
          price: "180.00",
        },
        {
          i_id: 11,
          vn: "veg",
          name: "HARA BHARA KABAB",
          price: "140.00",
        },
      ],
    },
    {
      c_id: 11,
      c_img:
        "https://www.merisaheli.com/wp-content/uploads/2018/04/5301-1.jpg",
      category: "NON VEG KABEB",
      items: [
        {
          i_id: 1,
          vn: "nveg",
          name: "CHICKEN AFGANI(Full)",
          price: "400.00",
        },
        {
          i_id: 2,
          vn: "nveg",
          name: "CHICKEN AFGANI(Half)",
          price: "220.00",
        },
        {
          i_id: 3,
          vn: "nveg",
          name: "CHICKEN TIRANGA",
          price: "260.00",
        },
        {
          i_id: 4,
          vn: "nveg",
          name: "CHICKEN SHEKARI ",
          price: "400.00",
        },
        {
          i_id: 5,
          vn: "nveg",
          name: "SHAMI KABEB",
          price: "260.00",
        },
        {
          i_id: 6,
          vn: "nveg",
          name: "CHICKEN KATHI ROLL",
          price: "190.00",
        },
        {
          i_id: 7,
          vn: "nveg",
          name: "MUTTON KATHI ROLL",
          price: "200.00",
        },
        {
          i_id: 8,
          vn: "nveg",
          name: "FISH BOTI",
          price: "200.00",
        },
        {
          i_id: 9,
          vn: "nveg",
          name: "PAHADI FISH",
          price: "200.00",
        },
        {
          i_id: 10,
          vn: "nveg",
          name: "FISH TIKKA(8PCS)",
          price: "190.00",
        },
        {
          i_id: 11,
          vn: "nveg",
          name: "FISH AMRITSARI",
          price: "200.00",
        },
        {
          i_id: 12,
          vn: "nveg",
          name: "FISH FRY",
          price: "180.00",
        },
        {
          i_id: 13,
          vn: "nveg",
          name: "TANDOORI PRAWNS",
          price: "180.00",
        },
        {
          i_id: 14,
          vn: "nveg",
          name: "PISHORI SPE. TANDOORI FISH",
          price: "260.00",
        },
        {
          i_id: 15,
          vn: "nveg",
          name: "PAMPLATE FRY",
          price: "260.00",
        },
        {
          i_id: 16,
          vn: "nveg",
          name: "TANDOORI PAMPLATE",
          price: "260.00",
        },
        {
          i_id: 17,
          vn: "nveg",
          name: "CHICKEN PLATTER",
          price: "560.00",
        },
        {
          i_id: 18,
          vn: "nveg",
          name: "NON VEG PLATTER",
          price: "660.00",
        },
        {
          i_id: 19,
          vn: "nveg",
          name: "TANDOORI CHICKEN (FULL)",
          price: "320.00",
        },
        {
          i_id: 20,
          vn: "nveg",
          name: "TANDOORI CHICKEN (HALF)",
          price: "170.00",
        },
        {
          i_id: 21,
          vn: "nveg",
          name: "CHICKEN AMRITSARI( FULL)",
          price: "340.00",
        },
        {
          i_id: 22,
          vn: "nveg",
          name: "CHICKEN AMRITSARI (HALF)",
          price: "170.00",
        },
        {
          i_id: 23,
          vn: "nveg",
          name: "GRILL CHICKEN (FULL)",
          price: "370.00",
        },
        {
          i_id: 24,
          vn: "nveg",
          name: "GRILL CHICKEN (HALF)",
          price: "220.00",
        },
        {
          i_id: 25,
          vn: "nveg",
          name: "CHEESE GRILL CHICKEN(FULL)",
          price: "430.00",
        },
        {
          i_id: 26,
          vn: "nveg",
          name: "CHEESE GRILL CHICKEN(HALF)",
          price: "280.00",
        },
        {
          i_id: 27,
          vn: "nveg",
          name: "GRILL CHICKEN CHEESE KABEB(8PCS)",
          price: "280.00",
        },
        {
          i_id: 28,
          vn: "nveg",
          name: "BOTI CHICKEN KABEB",
          price: "240.00",
        },
        {
          i_id: 29,
          vn: "nveg",
          name: "BOTI CHICKEN B/L",
          price: "240.00",
        },
        {
          i_id: 30,
          vn: "nveg",
          name: "CHICKEN BOTI MUGHLAI",
          price: "250.00",
        },
        {
          i_id: 31,
          vn: "nveg",
          name: "CHICKEN TIKKA(8PCS)",
          price: "240.00",
        },
        {
          i_id: 32,
          vn: "nveg",
          name: "MURG PISHORI SPE. KABEB ",
          price: "240.00",
        },
        {
          i_id: 33,
          vn: "nveg",
          name: "MURG BANJARA KABEB",
          price: "250.00",
        },
        {
          i_id: 34,
          vn: "nveg",
          name: "MURG MALAI TIKKA",
          price: "250.00",
        },
        {
          i_id: 35,
          vn: "nveg",
          name: "MURG IRANI KABEB",
          price: "250.00",
        },
        {
          i_id: 36,
          vn: "nveg",
          name: "MURG MULTANI KABEB",
          price: "250.00",
        },
        {
          i_id: 37,
          vn: "nveg",
          name: "MURG PAHADI KABEB",
          price: "250.00",
        },
        {
          i_id: 38,
          vn: "nveg",
          name: "MURG RESHMI KABEB",
          price: "260.00",
        },
        {
          i_id: 39,
          vn: "nveg",
          name: "MURG ACHARI KABEB",
          price: "250.00",
        },
        {
          i_id: 40,
          vn: "nveg",
          name: "CHICKEN TANGDI KABEB(2PCS)",
          price: "220.00",
        },
        {
          i_id: 41,
          vn: "nveg",
          name: "TANGDI GULMOHAR KABEB",
          price: "240.00",
        },
        {
          i_id: 42,
          vn: "nveg",
          name: "BHARWA TANGDI",
          price: "240.00",
        },
        {
          i_id: 43,
          vn: "nveg",
          name: "CHICKEN SHEEK KABEB",
          price: "250.00",
        },
        {
          i_id: 44,
          vn: "nveg",
          name: "MUTTON SHEEK KABEB",
          price: "260.00",
        },
        {
          i_id: 45,
          vn: "nveg",
          name: "CHICKEN CHOPP",
          price: "250.00",
        },
        {
          i_id: 46,
          vn: "nveg",
          name: "MUTTON CHOPP",
          price: "250.00",
        },
      ],
    },
    {
      c_id: 12,
      c_img:
        "https://c.ndtvimg.com/2020-05/rdcvrtb_fried-egg_625x300_29_May_20.jpg",
      category: "EGG",
      items: [
        {
          i_id: 1,
          vn: "nveg",
          name: "BOILED EGG",
          price: "40.00",
        },
        {
          i_id: 2,
          vn: "nveg",
          name: "FRIED EGG",
          price: "50.00",
        },
        {
          i_id: 3,
          vn: "nveg",
          name: "EGG PAKODA",
          price: "120.00",
        },
        {
          i_id: 4,
          vn: "nveg",
          name: "OMLETE",
          price: "60.00",
        },
        {
          i_id: 5,
          vn: "nveg",
          name: "MASALA OMLETE",
          price: "70.00",
        },
        {
          i_id: 6,
          vn: "nveg",
          name: "CHEESE OMLETE",
          price: "90.00",
        },
      ],
    },

    {
      c_id: 13,
      c_img:
        "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/Articles/High_Protein_Indian_Vegetarian_Main_Course_Recipes_For_Body_Building__Weight_Loss.png",
      category: "MAIN COURES VEG",
      items: [
        {
          i_id: 1,
          vn: "veg",
          name: "PANEER TIKKA MASALA",
          price: "200.00",
        },
        {
          i_id: 2,
          vn: "veg",
          name: "PANEER BUTTER MASALA",
          price: "170.00",
        },
        {
          i_id: 3,
          vn: "veg",
          name: "PANEER KANDHARI",
          price: "170.00",
        },
        {
          i_id: 4,
          vn: "veg",
          name: "PANEER TUFANI",
          price: "200.00",
        },
        {
          i_id: 5,
          vn: "veg",
          name: "SHAMI KABEB",
          price: "260.00",
        },
        {
          i_id: 6,
          vn: "veg",
          name: "MUTTER PANEER",
          price: "160.00",
        },
        {
          i_id: 7,
          vn: "veg",
          name: "PALAK PANEER  ",
          price: "160.00",
        },
        {
          i_id: 8,
          vn: "veg",
          name: "PANEER KADHAI",
          price: "170.00",
        },
        {
          i_id: 9,
          vn: "veg",
          name: "PANEER HANDI	",
          price: "170.00",
        },
        {
          i_id: 10,
          vn: "veg",
          name: "PANEER BHURJI",
          price: "170.00",
        },
        {
          i_id: 11,
          vn: "veg",
          name: "PANEER KORMA",
          price: "170.00",
        },
        {
          i_id: 12,
          vn: "veg",
          name: "PANEER PASANDA",
          price: "200.00",
        },
        {
          i_id: 13,
          vn: "veg",
          name: "SHAHI PANEER",
          price: "170.00",
        },
        {
          i_id: 14,
          vn: "veg",
          name: "PANEER CHATPATA",
          price: "170.00",
        },
        {
          i_id: 15,
          vn: "veg",
          name: "PANEER HYADRABADI",
          price: "170.00",
        },
        {
          i_id: 16,
          vn: "veg",
          name: "PANEER DO PYAAZA",
          price: "170.00",
        },
        {
          i_id: 17,
          vn: "veg",
          name: "PANEER KOLHAPURI",
          price: "170.00",
        },
        {
          i_id: 18,
          vn: "veg",
          name: "KAJU/MUSHROOM PANEER",
          price: "200.00",
        },
        {
          i_id: 19,
          vn: "veg",
          name: "KAJU CURRY",
          price: "200.00",
        },
        {
          i_id: 20,
          vn: "veg",
          name: "KAJU MASALA",
          price: "200.00",
        },
        {
          i_id: 21,
          vn: "veg",
          name: "VEG. MAKHANWALA",
          price: "140.00",
        },
        {
          i_id: 22,
          vn: "veg",
          name: "VEG. JAL FRIZIE",
          price: "140.00",
        },
        {
          i_id: 23,
          vn: "veg",
          name: "VEG. JAIPURI",
          price: "140.00",
        },
        {
          i_id: 24,
          vn: "veg",
          name: "VEG. KOLHAPURI",
          price: "140.00",
        },
        {
          i_id: 25,
          vn: "veg",
          name: "MIX VEGTABLE",
          price: "140.00",
        },
        {
          i_id: 26,
          vn: "veg",
          name: "NAV RATAN KORMA",
          price: "170.00",
        },
        {
          i_id: 27,
          vn: "veg",
          name: "NAV RATAN CURRY",
          price: "170.00",
        },
        {
          i_id: 28,
          vn: "veg",
          name: "CORN PALAK",
          price: "170.00",
        },
        {
          i_id: 29,
          vn: "veg",
          name: "MALAI KOFTA",
          price: "140.00",
        },
        {
          i_id: 30,
          vn: "veg",
          name: "NARGISI KOFTA",
          price: "150.00",
        },
        {
          i_id: 31,
          vn: "veg",
          name: "KOFTA SAGWALA",
          price: "140.00",
        },
        {
          i_id: 32,
          vn: "veg",
          name: "PANEER KOFTA",
          price: "170.00",
        },
        {
          i_id: 33,
          vn: "veg",
          name: "ALOO GOBI",
          price: "120.00",
        },
        {
          i_id: 34,
          vn: "veg",
          name: "ALOO MATTER",
          price: "120.00",
        },
        {
          i_id: 35,
          vn: "veg",
          name: "ALOO PALAK",
          price: "120.00",
        },
        {
          i_id: 36,
          vn: "veg",
          name: "METHI MUTTER MALAI",
          price: "160.00",
        },
        {
          i_id: 37,
          vn: "veg",
          name: "CHANA MASALA",
          price: "150.00",
        },
        {
          i_id: 38,
          vn: "veg",
          name: "STUFF TOMATO /CAPSICUM",
          price: "160.00",
        },
        {
          i_id: 39,
          vn: "veg",
          name: "BABY CORN MUSHROOM MASALA",
          price: "170.00",
        },
        {
          i_id: 40,
          vn: "veg",
          name: "CHICKEN TANGDI KABEB(2PCS.)",
          price: "220.00",
        },
        {
          i_id: 41,
          vn: "veg",
          name: "MUSHROOM MASALA",
          price: "170.00",
        },
        {
          i_id: 42,
          vn: "veg",
          name: "PALAK BABYCORN MUSHROOM",
          price: "170.00",
        },
        {
          i_id: 43,
          vn: "veg",
          name: "DUM ALOO KASHMIRI/PUNJABI",
          price: "170.00",
        },
        {
          i_id: 44,
          vn: "veg",
          name: "BAIGAN BHARTA",
          price: "110.00",
        },
      ],
    },

    {
      c_id: 14,
      c_img:
        "https://c.ndtvimg.com/2020-05/0ug0nbfo_chicken-masala_625x300_28_May_20.jpg",
      category: "MAIN COURES NON VEG",
      items: [
        {
          i_id: 1,
          vn: "nveg",
          name: "BUTTER CHICKEN",
          price: "F:420, H:250",
        },
        {
          i_id: 2,
          vn: "nveg",
          name: "BUTTER CHICKEN(B/L)",
          price: "F:420, H:250",
        },
        {
          i_id: 3,
          vn: "nveg",
          name: "CHICKEN KADHAI",
          price: "F:420, H:250",
        },
        {
          i_id: 4,
          vn: "nveg",
          name: "CHICKEN HANDI",
          price: "F:420, H:250",
        },
        {
          i_id: 5,
          vn: "nveg",
          name: "CHICKEN KOLHAPURI",
          price: "F:420, H:250",
        },
        {
          i_id: 6,
          vn: "nveg",
          name: "CHICKEN MUGHALI",
          price: "F:440, H:260",
        },
        {
          i_id: 7,
          vn: "nveg",
          name: "TAWA CHICKEN",
          price: "F:420, H:260",
        },
        {
          i_id: 8,
          vn: "nveg",
          name: "CHICKEN CURRY",
          price: "F:420, H:250",
        },
        {
          i_id: 9,
          vn: "nveg",
          name: "CHICKEN MASALA",
          price: "F:420, H:250",
        },
        {
          i_id: 10,
          vn: "nveg",
          name: "CHICKEN CREAM",
          price: "F:440, H:260",
        },
        {
          i_id: 11,
          vn: "nveg",
          name: "CHICKEN PATIYALA",
          price: "F:440, H:260",
        },
        {
          i_id: 12,
          vn: "nveg",
          name: "CHICKEN HYDRABADI",
          price: "F:420, H:250",
        },
        {
          i_id: 13,
          vn: "nveg",
          name: "CHICKEN TIKKA MASALA (P)",
          price: "320.00",
        },
        {
          i_id: 14,
          vn: "nveg",
          name: "MUTTON ROGAN JOSH",
          price: "250.00",
        },
        {
          i_id: 15,
          vn: "nveg",
          name: "MUTTON MUGHLAI",
          price: "260.00",
        },
        {
          i_id: 16,
          vn: "nveg",
          name: "BHUNA MUTTON",
          price: "250.00",
        },
        {
          i_id: 17,
          vn: "nveg",
          name: "MUTTON MASALA ",
          price: "250.00",
        },
        {
          i_id: 18,
          vn: "nveg",
          name: "MUTTON CURRY",
          price: "250.00",
        },
        {
          i_id: 19,
          vn: "nveg",
          name: "MUTTON HANDI",
          price: "250.00",
        },
        {
          i_id: 20,
          vn: "nveg",
          name: "MUTTON DO PYAAZA",
          price: "250.00",
        },
        {
          i_id: 21,
          vn: "nveg",
          name: "nVEG. MAKHANWALA ",
          price: "140.00",
        },
        {
          i_id: 22,
          vn: "nveg",
          name: "MUTTON SAGWALA",
          price: "250.00",
        },
        {
          i_id: 23,
          vn: "nveg",
          name: "BRAIN MASALA	",
          price: "250.00",
        },
        {
          i_id: 24,
          vn: "nveg",
          name: "KEEMA KALEJI  ",
          price: "250.00",
        },
        {
          i_id: 25,
          vn: "nveg",
          name: "FISH CURRY ",
          price: "260.00",
        },
        {
          i_id: 26,
          vn: "nveg",
          name: "NAV RATAN KORMA",
          price: "170.00",
        },
        {
          i_id: 27,
          vn: "nveg",
          name: "FISH MASALA",
          price: "270.00",
        },
        {
          i_id: 28,
          vn: "nveg",
          name: "PRAWNS CURRY(6PCS)",
          price: "270.00",
        },
        {
          i_id: 29,
          vn: "nveg",
          name: "PRAWNS PESHAWARI(6PCS)	 ",
          price: "270.00",
        },
        {
          i_id: 30,
          vn: "nveg",
          name: "EGG CURRY ",
          price: "140.00",
        },
        {
          i_id: 31,
          vn: "nveg",
          name: "EGG MASALA",
          price: "150.00",
        },
        {
          i_id: 32,
          vn: "nveg",
          name: "EGG BHURJI",
          price: "120.00",
        },
      ],
    },

    {
      c_id: 15,
      c_img:
        "https://www.thespruceeats.com/thmb/GLt4uTZua2Ck9IDxAl-W3XeZ624=/4145x3109/smart/filters:no_upscale()/naan-leavened-indian-flatbread-1957348-final-08-116a2e523f6e4ee693b1a9655784d9b9.jpg",
      category: "INDIAN BREAD",
      items: [
        {
          i_id: 1,
          vn: "veg",
          name: "TANDOORI ROTI",
          price: "10.00",
        },
        {
          i_id: 2,
          vn: "veg",
          name: "TANDOORI ROTI BUTTER",
          price: "12.00",
        },
        {
          i_id: 3,
          vn: "veg",
          name: "RUMALI ROTI	",
          price: "10.00",
        },
        {
          i_id: 4,
          vn: "veg",
          name: "MISSI ROTI",
          price: "20.00",
        },
        {
          i_id: 5,
          vn: "veg",
          name: "PLAIN KULCHA",
          price: "20.00",
        },
        {
          i_id: 6,
          vn: "veg",
          name: "BUTTER KULCHA",
          price: "25.00",
        },
        {
          i_id: 7,
          vn: "veg",
          name: "PANEER KULCHA",
          price: "40.00",
        },
        {
          i_id: 8,
          vn: "veg",
          name: "PANEER PARATHA",
          price: "40.00",
        },
        {
          i_id: 10,
          vn: "veg",
          name: "STUFFED PARATHA",
          price: "40.00",
        },
        {
          i_id: 11,
          vn: "veg",
          name: "STUFFED KULCHA/NAAN",
          price: "40.00",
        },
        {
          i_id: 12,
          vn: "veg",
          name: "LACHHA PARATHA ",
          price: "20.00",
        },
        {
          i_id: 13,
          vn: "veg",
          name: "BUTTER NAAN",
          price: "25.00",
        },
        {
          i_id: 14,
          vn: "veg",
          name: "PLAIN NAAN",
          price: "20.00",
        },
        {
          i_id: 15,
          vn: "veg",
          name: "CHEESE CHILLY GARLIC NAAN	",
          price: "50.00",
        },
        {
          i_id: 16,
          vn: "veg",
          name: "PUDINA PARATHA",
          price: "30.00",
        },
        {
          i_id: 17,
          vn: "veg",
          name: "GOBI PARATHA",
          price: "30.00",
        },
        {
          i_id: 18,
          vn: "veg",
          name: "ALOO PARATAH",
          price: "30.00",
        },
        {
          i_id: 19,
          vn: "nveg",
          name: "KEEMA NAAN/KULCHA",
          price: "50.00",
        },
        {
          i_id: 20,
          vn: "nveg",
          name: "KEEMA PARATHA	",
          price: "50.00",
        },
        {
          i_id: 21,
          vn: "veg",
          name: "KASHMIRI NAAN ",
          price: "50.00",
        },
      ],
    },

    {
      c_id: 16,
      c_img:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/egg-fried-rice-recipe-500x500.jpg",
      category: "RICE",
      items: [
        {
          i_id: 1,
          vn: "veg",
          name: "GRAVY RICE",
          price: "150.00",
        },
        {
          i_id: 2,
          vn: "veg",
          name: "MASALA RICE",
          price: "150.00",
        },
        {
          i_id: 3,
          vn: "veg",
          name: "CHICKEN BIRYANI",
          price: "10.00",
        },
        {
          i_id: 4,
          vn: "veg",
          name: "MUTTON BIRYANI",
          price: "200.00",
        },
        {
          i_id: 5,
          vn: "veg",
          name: "FISH BIRYANI",
          price: "200.00",
        },
        {
          i_id: 6,
          vn: "veg",
          name: "EGG BIRYANI",
          price: "150.00",
        },
        {
          i_id: 7,
          vn: "veg",
          name: "PLAIN RICE",
          price: "80.00",
        },
        {
          i_id: 8,
          vn: "veg",
          name: "JEERA FRIED RICE  ",
          price: "90.00",
        },
        {
          i_id: 9,
          vn: "veg",
          name: "ONION RICE",
          price: "100.00",
        },
        {
          i_id: 10,
          vn: "veg",
          name: "VEG. BIRYANI",
          price: "140.00",
        },
        {
          i_id: 11,
          vn: "veg",
          name: "VEG PULAO",
          price: "140.00",
        },
        {
          i_id: 12,
          vn: "veg",
          name: "KAJU BIRYANI",
          price: "160.00",
        },
        {
          i_id: 13,
          vn: "veg",
          name: "GREEN PEAS PULAO",
          price: "130.00",
        },
        {
          i_id: 14,
          vn: "veg",
          name: "KASHMIRI PULAO",
          price: "160.00",
        },
        {
          i_id: 15,
          vn: "veg",
          name: "PANEER BIRYANI",
          price: "160.00",
        },
        {
          i_id: 16,
          vn: "veg",
          name: "MATTER PANEER BIRYANI",
          price: "160.00",
        },
        {
          i_id: 17,
          vn: "veg",
          name: "VEG HYDRABADI BIRYANI",
          price: "150.00",
        },
        {
          i_id: 18,
          vn: "veg",
          name: "CURD RICE",
          price: "110.00",
        },
      ],
    },

    {
      c_id: 17,
      c_img:
        "https://www.cookwithmanali.com/wp-content/uploads/2014/09/Moong-Dal-500x375.jpg",
      category: "DAL PREPARATION",
      items: [
        {
          i_id: 1,
          vn: "veg",
          name: "DAL FRY",
          price: "90.00",
        },
        {
          i_id: 2,
          vn: "veg",
          name: "DAL TADKA",
          price: "100.00",
        },
        {
          i_id: 3,
          vn: "veg",
          name: "DAL JEERA",
          price: "90.00",
        },
        {
          i_id: 4,
          vn: "veg",
          name: "DAL BUTTER FRY",
          price: "120.00",
        },
        {
          i_id: 5,
          vn: "veg",
          name: "DAL MAKHANI",
          price: "120.00",
        },
        {
          i_id: 6,
          vn: "veg",
          name: "DAL MUGHALI",
          price: "120.00",
        },
      ],
    },

    {
      c_id: 18,
      c_img: "https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800",
      category: "DESERTS",
      items: [
        {
          i_id: 1,
          vn: "veg",
          name: "GULABJAMUN	",
          price: "40.00",
        },
        {
          i_id: 2,
          vn: "veg",
          name: "RASHGULLA",
          price: "60.00",
        },
        {
          i_id: 3,
          vn: "veg",
          name: "MOONG DAL HALWA",
          price: "50.00",
        },
        {
          i_id: 4,
          vn: "veg",
          name: "GAJAR HALWA",
          price: "50.00",
        },
      ],
    },
  ]);
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

          {/* <Carousel>
            <div>

            </div>
            <div>
              <img
                src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG"
                alt="Paneer Tikka"
                className="img-fluid rounded mb-4"
              />
            </div>
            <div>
              <img
                src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG"
                alt="Paneer Tikka"
                className="img-fluid rounded mb-4"
              />
            </div>
          </Carousel> */}

          <div className="accordion">
            {foodMenu.map((data) => (
              <div key={data.c_id} className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
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
                      <h4 className="mb-0">{data.category}</h4>
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
                      {data.items.map((food) => (
                        <>
                          <div className="col-10 mb-3 d-inline-flex align-items-center">
                            {food.vn === "veg" ? (
                              <img src={veg} alt="veg" className="vnveg" />
                            ) : (
                              <img src={nveg} alt="nveg" className="vnveg" />
                            )}
                            <h5 className="mb-0 text-capitalize">{food.name}</h5>
                          </div>
                          <div className={`col-2 mb-3 ${food.price.length < 7 ? 'text-nowrap' : ''}`}>
                            {console.log(food.price.length)}
                            <h6>&#x20B9; {food.price}</h6>
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
}

export default App;
