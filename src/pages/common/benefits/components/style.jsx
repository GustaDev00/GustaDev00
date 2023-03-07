import styled from "styled-components";

export const LineBenefits = styled.div`
  margin-top: 20px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
`;

export const UniqBenefits = styled.div`
  background: #fff;
  margin: 0 7.5px;
  background: #efefef;
  border-radius: 4px;
  display: flex !important;
  align-items: center;
  padding: 10px 20px;
  @media (max-width: 768px) {
    justify-content: center;
  }

  .text {
    margin-left: 20px;
    width: 60%;

    p {
      font-family: "Titillium Web";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #000000;
    }

    h2 {
      font-family: "Titillium Web";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 21px;
      color: #353535;
    }
  }

  svg {
    width: 32px;
    height: 32px;
  }
`;
