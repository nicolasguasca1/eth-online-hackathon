import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import { MoralisProvider } from "react-moralis";
import { ContextProvider } from "../Store";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS

config.autoAddCss = false;

const theme = extendTheme({
  config: {
    initialColorMode: "dark"
  }
});

const APP_ID = process.env.NEXT_PUBLIC_MORALIS_APP_ID as string;
const SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL as string;

// const SERVER_URL = "https://exhvmic69969.usemoralis.com:2053/server";
// const APP_ID = "vTAL7LV9e2C8AR7QSRwwTWksdujMxaIubU6Aq9ua";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("APP_ID", APP_ID);
  console.log("SERVER_URL", SERVER_URL);

  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <ChakraProvider theme={theme}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ChakraProvider>
    </MoralisProvider>
  );
}
export default MyApp;
