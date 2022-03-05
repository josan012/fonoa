import styled from "@emotion/styled";
import theme from "../theme";
import "@fontsource/roboto";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
  }

  .card {
    width: 1440px;
    display: grid;
    grid-template-columns: 600px 1fr;
    margin-top: 50px;
  }

  .text {
    margin-top: 60px;
  }

  .expand {
    height: auto;
    width: 530px;
    font-size: 48px;
    margin-left: 100px;
    font-family: "Roboto";
    max-width: 600px;
  }

  .buton-text {
    margin-left: 100px;
  }

  Button {
    background-color: ${theme.palette.primary.main};
  }
`;
export default Style;
