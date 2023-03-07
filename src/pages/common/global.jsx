import styled from "styled-components";

export const Container = styled.div`
  background: #fff;

  .listProduct {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 49px;
    text-align: center;
    color: #353535;
    margin: 30px 0;
  }

  .listBrands {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 49px;
    color: #353535;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
  }

  h1 {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #353535;
    margin-top: 20px;
  }
`;

export const NavBarTarja = styled.div`
  background: #353535;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;

  p {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    @media (max-width: 768px) {
      font-size: 10px;
    }
    line-height: 18px;
    color: #ffffff;
  }
`;

export const ContainerContent = styled.div`
  width: 90%;
  margin: auto;
`;

export const DivBanner = styled.div`
  margin-bottom: 40px;
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 70%;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 30px;
    }
  }
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 40px;

  h2 {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 37px;
    color: #000000;
    margin-bottom: 10px;
  }

  p {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
`;
