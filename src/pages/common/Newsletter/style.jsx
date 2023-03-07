import styled from "styled-components";

export const LineNewsletter = styled.div`
background: #FAFAFA;
padding: 20px 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const NewsletterText = styled.h2`
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #353535;
  margin-right: 30px;
  @media (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 10px;
  }
`;
export const NewsletterForms = styled.div`
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 70%;
    background: #ffffff;
    border: 1px solid #353535;
    border-radius: 4px;
    height: 26px;
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    padding-left: 20px;
    color: #353535;
    @media (max-width: 768px) {
        width: 60%;
  }
  }
  button {
    margin-left: 2px;
    border: none;
    background: #faa500;
    border: 1px solid #faa500;
    border-radius: 4px;
    padding: 2px 20px;
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
  }
`;
