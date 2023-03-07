import styled from "styled-components";

export const DivSlider = styled.div`
  overflow: hidden;
  button.slick-arrow {
    width: 20px;
    height: 20px;
    z-index: 10;
    left: 25px;
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
    right: 25px;
    left: inherit !important;
  }
  .slick-dots{
    bottom: 10px !important;
    li{
        width: 10px;
        height: 10px;
        background: none;
        border: 1px solid #FAA500;
        border-radius: 50%;
        &.slick-active{
            background: #FAA500;
        }
    }
  }
  .slick-slider {
    height: 550px;
  }
`;
