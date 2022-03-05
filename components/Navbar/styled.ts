import styled from "@emotion/styled";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
  }

  .navbar {
    width: 1440px;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
  }

  .logo {
    margin-top: 40px;
    margin-left: 100px;
  }

  .bar {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-top: 50px;
  }

  a {
    position: relative;
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

  a:hover:after {
    text-decoration: none;
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    bottom: 0;
    left: 25%;
    border-bottom: 2px solid #55e691;
    color: #55e691;
  }
`;
export default Style;
