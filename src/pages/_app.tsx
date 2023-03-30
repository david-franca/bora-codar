import "@/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import { Lato, Crimson_Pro } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";

const lato = Lato({
  weight: ["300", "400"],
  subsets: ["latin"],
});
const crimson = Crimson_Pro({ subsets: ["vietnamese"] });

const theme = extendTheme({
  fonts: {
    lato: lato.style.fontFamily,
    crimson: crimson.style.fontFamily,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
