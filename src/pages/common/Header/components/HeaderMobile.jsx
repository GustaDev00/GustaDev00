import { ButtonsHeader, HeaderMenu, LogoHeader } from "../style";
import logo from "../../../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";


const HeaderMobile = ({ url }) => {
  return (
    <HeaderMenu>
      <LogoHeader>
      <GiHamburgerMenu />
        <a href={url}>
          <img src={logo} alt="Logo do website" />
        </a>
      </LogoHeader>
      <ButtonsHeader>
        <CiSearch />
        <BsHandbag />
      </ButtonsHeader>
    </HeaderMenu>
  );
};
export default HeaderMobile;
