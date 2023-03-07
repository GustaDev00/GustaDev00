import React from "react";
import Slider from "react-slick";
import imageBanner from "../../../assets/imageUrl.png";
import { DivSlider } from "./style";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <DivSlider>
      <Slider {...settings}>
        <div>
          <img src={imageBanner} alt="Imagem banner" />
        </div>
        <div>
          <img src={imageBanner} alt="Imagem banner" />
        </div>
      </Slider>
    </DivSlider>
  );
};

export default BannerSlider;
