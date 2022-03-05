import styled from "@emotion/styled";
import "@fontsource/roboto";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
  }

  .footer {
    width: 1440px;
    height: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .logo {
    padding-top: 80px;
    padding-left: 100px;
  }

  .links {
    margin-top: 50px;
    width: 200px;
    display: flex;
    justify-content: space-between;
  }

  .column {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    margin-left: 50px;
  }

  a {
    position: relative;
    margin-bottom: 10px;
  }

  a:link {
    text-decoration: none;
    color: black;
  }

  a:visited {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: #55e691;
  }
`;
export default Style;
