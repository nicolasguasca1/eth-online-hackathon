import { AppBar } from "@material-ui/core";
import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

import VideoPlayer from "../components/VideoPlayer";
import Notifications from "../components/Notification";
import Options from "../components/Options";

import { useMoralis } from "react-moralis";
import { Button } from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/layout";
import { Auth } from "../components/Auth";

// import PlayerCSS from "../components/playerCss";

const Home: NextPage = () => {
  const { isAuthenticated, logout, user } = useMoralis();

  if (isAuthenticated) {
    return (
      <Container align="center">
        <Heading mb={6}>Welcome to the decentralized LIVE Web!</Heading>
        <Button onClick={() => logout()}>Logout</Button>
        {/* <AppBar position="static" color="inherit" className={styles.grid}>
          <a>
            <h2 color="black"> Start your session here!</h2>
          </a>
        </AppBar> */}
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </Container>
    );
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
    <div>
      <Head>
        <title>Video-Calls ETH POC</title>
        <meta name="description" content="VIDEO-CALLS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <div>Lomplay</div>
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
