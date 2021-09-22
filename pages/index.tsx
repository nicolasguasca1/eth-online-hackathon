import { AppBar } from "@material-ui/core";
import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

import VideoPlayer from "../components/VideoPlayer";
import Notifications from "../components/Notifications";
import Options from "../components/Options";

import { useMoralis } from "react-moralis";
import { Button } from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/layout";
import { Auth } from "components/Auth";
import Dashboard from "./dashboard/index";
import Page from "components/UI/Page";
import Header from "components/UI/Header";

const Home: NextPage = () => {
  const { isAuthenticated, logout, user } = useMoralis();
  const username = user?.attributes.username;
  if (isAuthenticated) {
    return <Dashboard username={username} />;
  }

  // const videoJsOptions = {
  //   techOrder: ["youtube"],
  //   autoplay: false,
  //   controls: true,
  //   sources: [
  //     {
  //       src: "https://www.youtube.com/watch?v=IxQB14xVas0",
  //       type: "video/youtube"
  //     }
  //   ]
  // };
  return (
    <Page>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Video Calls!</h1>
        <Container align="center">
          <Auth></Auth>
        </Container>
        {/* <PlayerCSS /> */}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <div>Callties labs</div>
          </span>
        </a>
      </footer>
    </Page>
  );
};

export default Home;
