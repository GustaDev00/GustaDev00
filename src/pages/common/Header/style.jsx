import styled from "styled-components";

export const HeaderMenu = styled.header`
  background: #fff;
  height: 88px;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
`;

export const LogoHeader = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    svg{
      margin-right: 15px;
      font-size: 20px;
    }
  }
  img {
    width: 100%;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  position: relative;

  button {
    border: none;
    position: absolute;
    background: #faa500;
    border-radius: 8px;
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: white;
    right: 0px;
    height: 40px;
    padding: 0 20px;
  }

  input {
    background: #efefef;
    border-radius: 10px;
    height: 40px;
    border-radius: 10px;
    width: 35vw;
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #353535;
    padding-left: 24px;
    border: none;
  }
`;

export const ButtonsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 30%;
   svg{
    font-size: 30px;
   } 
  }

  div {
    display: flex;
    margin: 0 2px;
    align-items: center;
    justify-content: center;
    padding: 15px;
    cursor: pointer;

    &.minicart {
      border: 1px solid #faa500;
      border-radius: 8px;
    }

    p {
      margin-left: 6px;
    }
  }
`;

export const UlMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 14px 0 13px 0;

  li {
    display: flex;
    align-items: center;
    padding: 4px 10px;
    margin: 0 2rem;
    cursor: pointer;
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #353535;
    &:hover {
      font-weight: 600;
    }

    p {
      margin-left: 10px;
      font-family: "Titillium Web";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 21px;
      color: #faa500;
      &:hover {
        font-weight: 800;
      }
    }
  }
`;
