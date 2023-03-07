import { ButtonsHeader, HeaderMenu, LogoHeader, SearchBar } from "../style";
import logo from '../../../../assets/logo.png'
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

const HeaderDesktop = ({url}) => {
    
  return (
    <HeaderMenu>
      <LogoHeader>
        <a href={url}>
          <img src={logo} alt="Logo do website" />
        </a>
      </LogoHeader>
      <SearchBar>
        <input type="text" placeholder="O Que Você Busca?" />
        <button>Buscar</button>
      </SearchBar>
      <ButtonsHeader>
        <div className="buttonsHeader myAccount">
          <FaRegUser />
          <p>Minha Conta</p>
        </div>
        <div className="buttonsHeader myOrder">
          <AiOutlineHeart />
          <p>Minha Conta</p>
        </div>
        <div className="buttonsHeader minicart">
          <BsHandbag />
          <p>Meu Carrinho</p>
        </div>
      </ButtonsHeader>
    </HeaderMenu>
  );
};
export default HeaderDesktop;
