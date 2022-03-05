import styled from "@emotion/styled";
import theme from "../theme";
import "@fontsource/roboto";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
  }

  .grey {
    width: 100vw;
    background-color: ${theme.palette.secondary.main};
    height: 524px;
    padding-top: 60px;
  }

  .plug {
    font-size: 24px;
    color: #ffffff;
    font-family: "Roboto";
    width: 300px;
    height: auto;
    text-align: center;
  }

  .description {
    width: 703px;
    height: auto;
    font-size: 18px;
    color: #959595;
  }

  Button {
    margin-top: 30px;
    background-color: ${theme.palette.primary.main};
  }
`;
export default Style;
