import styled from "@emotion/styled";
import "@fontsource/roboto";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
  }

  .secondCard {
    width: 1440px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 50px;
    margin-bottom: 60px;
  }

  .global {
    font-size: 48px;
    height: auto;
    width: 415px;
    font-family: "Roboto";
    margin-left: 100px;
  }

  .description {
    font-size: 18px;
    height: auto;
    width: 546px;
    font-family: "Roboto";
    margin-left: 100px;
    color: #959595;
  }

  .image {
    display: flex;
    justify-content: center;
  }
`;
export default Style;
