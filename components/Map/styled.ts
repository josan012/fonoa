import styled from "@emotion/styled";
import "@fontsource/roboto";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
  }

  .question {
    font-size: 24px;
    font-family: "Roboto";
    height: auto;
    width: 614px;
    text-align: center;
    margin-top: 40px;
  }

  .answer {
    font-family: "Roboto";
    height: auto;
    width: 862px;
    text-align: center;
    font-size: 18px;
    color: #959595;
    margin-top: 20px;
  }

  .image {
    margin-top: 50px;
  }
`;
export default Style;
