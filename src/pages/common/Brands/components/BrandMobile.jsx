import React from "react";
import Slider from "react-slick";
import comma from "../../../../assets/Qoc0YF7.png.png";
import melissa from "../../../../assets/cHLLxR4.png.png";
import forever from "../../../../assets/JOTNQgl.png.png";
import zara from "../../../../assets/PN0nOAY.png.png";
import ann from "../../../../assets/qZ1WvYA.png.png";

const BrandsMobile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <img src={comma} alt="" />
      <img src={melissa} alt="" />
      <img src={forever} alt="" />
      <img src={zara} alt="" />
      <img src={ann} alt="" />
    </Slider>
  );
};
export default BrandsMobile;
