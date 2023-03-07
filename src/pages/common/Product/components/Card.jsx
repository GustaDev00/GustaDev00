import Produto from '../../../../assets/produto.png'
import { CardProduct, LineColors, LineText } from '../style'

const Card = () => {
    return (
    <CardProduct>
        <div className="img">
            <img src={Produto} alt="Imagem" />
        </div>
        <div className="contentProduct">
            <LineColors>
                <div className="orange active" />
                <div className="red" />
                <div className="blue" />
                <div className="purple" />
            </LineColors>
            <div className="price">
                <span>R$ 500,00</span>
            </div>
            <LineText>  
                <h2>Faux Suede Mini Skirt</h2>
                <p>
                A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
                </p>
            </LineText>
            <button>
                Adicionar
            </button>
        </div>
    </CardProduct>)
}

export default Card