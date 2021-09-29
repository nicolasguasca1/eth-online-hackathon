import "../styles/globals.css";
import type { AppProps } from "next/app";

import React from "react";

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

const serverUrl = "https://gpcsccfs4eyy.grandmoralis.com:2053/server";
const appId = "nDoAAbLEDLmP9TArw7fXMikJnSTiB4XJlCDkfo4L";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ChakraProvider>
    </MoralisProvider>
  );
}
export default MyApp;
