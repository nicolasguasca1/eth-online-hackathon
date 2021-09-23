import React, { useState } from "react";
import styles from "../styles/Home.module.css";

import { useMoralis } from "react-moralis";

import { useRouter } from "next/router";
import { Auth } from "../components/Auth";
import { Container, Heading } from "@chakra-ui/layout";
import Page from "components/UI/Page";

const Login = () => {
  //   const { authenticate, isAuthenticating, authError } = useMoralis();
  const router = useRouter();

  return (
    <Page>
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
          Powered by
          <span className={styles.logo}>
            <div>Callties labs</div>
          </span>
        </a>
      </footer>
    </Page>
  );
};

export default Login;
