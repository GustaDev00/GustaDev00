import Benefits from "./common/benefits";
import Brands from "./common/Brands";
import { BannerText, Container, ContainerContent, DivBanner, NavBarTarja } from "./common/global";
import Header from "./common/Header";
import Product from "./common/Product";
import BannerSlider from "./common/Slider";
import BannerFooter from '../assets/banner-footer.png'
import Newsletter from "./common/Newsletter";

const Home = () => {

  return (
    <Container>
      
      <NavBarTarja>
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </NavBarTarja>

      <Header />

      <BannerSlider />
    <ContainerContent>
      <h1>
        Por que comprar na Maeztra?
      </h1>

      <Benefits />

      <h2 className="listBrands">
        Marcas Parceiras
      </h2>

      <Brands />

      <h2 className="listProduct">
      As Mais Pedidas
      </h2>

      <Product />

      <DivBanner>
        <BannerText>
          <h2>Lorem ipsum </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.</p>
        </BannerText>
        <img src={BannerFooter} alt="" />
      </DivBanner>

      </ContainerContent>

      <Newsletter />
    </Container>
  );
};

export default Home;
