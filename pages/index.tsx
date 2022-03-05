import type { NextPage } from "next";
import { ThemeProvider } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Map from "../components/Map";
import Global from "../components/Global";
import Gray from "../components/Gray";
import Footer from "../components/Footer";
import theme from "../components/theme";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Card />
        <Map />
        <Global />
        <Gray />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Home;
