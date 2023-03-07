import React from 'react'
import { LineBenefits, UniqBenefits } from './style'
import { BiWorld } from "react-icons/bi";

const BenefitsDesktop = () => {

    return (
        <LineBenefits>
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
        </LineBenefits>
    )
}
export default BenefitsDesktop