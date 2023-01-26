import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import WidthProvider from "@/lib/context/useContext";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <WidthProvider>
          <RWBProvider>
            <main className={cx(sfPro.variable, inter.variable)}>
              <Component {...pageProps} />
            </main>
          </RWBProvider>
          <Analytics />
      </WidthProvider>
    </ChakraProvider>
    </QueryClientProvider>
  );
}
