import styled from "styled-components";

export const ContainerProduct = styled.div`
  position: relative;

  width: 100%;
  button.slick-arrow {
    width: 20px;
    height: 20px;
    z-index: 10;
    left: 0px;
    top: 200px;
    &::before {
      content: "";
      display: flex;
      align-items: center;
      padding: 36px;
      background: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='3em' width='3em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'%3E%3C/path%3E%3Cpath d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z'%3E%3C/path%3E%3C/svg%3E");
    }
  }
  .slick-next {
    transform: rotate(180deg);
    right: 0px;
    left: inherit !important;
  }
  .slick-dots {
    bottom: 10px !important;
    li {
      width: 10px;
      height: 10px;
      background: none;
      border: 1px solid #faa500;
      border-radius: 50%;
      &.slick-active {
        background: #faa500;
      }
    }
  }
  .slick-slider {
    height: 550px;
  }
`;

export const CardProduct = styled.div`
  width: 90%;
  margin: auto;

  img {
    width: 100%;
  }

  .contentProduct {
    padding: 0 20px;
  }
  .price span {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #353535;
  }

  button {
    width: 100%;
    border: none;
    background: #faa500;
    border-radius: 4px;
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #ffffff;
  }
`;

export const LineColors = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    cursor: pointer;
    width: 27px;
    height: 27px;
    border-radius: 4px;
    margin-right: 8px;
    margin-bottom: 4px;
    margin-top: 4px;

    &.active {
      border: 1px solid #353535;
    }
  }
  .orange {
    background-color: #deac71;
  }
  .blue {
    background-color: #6497d3;
  }
  .red {
    background-color: #d37164;
  }
  .purple {
    background-color: #3c3b79;
  }
`;

export const LineText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #000000;

    opacity: 0.5;
  }
  h2 {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  p,
  h2 {
    text-align: left;
  }
`;
