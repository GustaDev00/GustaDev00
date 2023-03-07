import React from 'react'
import Slider from 'react-slick';
import { UniqBenefits } from './style';
import { BiWorld } from "react-icons/bi";

const BenefitsMobile = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
      return (
        <Slider {...settings}>
            <UniqBenefits>
                <BiWorld />
                <div className='text'>
                    <h2>Produtos importados</h2>
                    <p>Produto de Alta Qualidade</p>
                </div>
            </UniqBenefits>
            <UniqBenefits>
                <BiWorld />
                <div className='text'>
                    <h2>Produtos importados</h2>
                    <p>Produto de Alta Qualidade</p>
                </div>
            </UniqBenefits>
            <UniqBenefits>
                <BiWorld />
                <div className='text'>
                    <h2>Produtos importados</h2>
                    <p>Produto de Alta Qualidade</p>
                </div>
            </UniqBenefits>
            <UniqBenefits>
                <BiWorld />
                <div className='text'>
                    <h2>Produtos importados</h2>
                    <p>Produto de Alta Qualidade</p>
                </div>
            </UniqBenefits>
        </Slider>
      );
}
export default BenefitsMobile