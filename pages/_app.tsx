import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import Layout from "../components/Layout.jsx";
import "../public/styles/style.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}
