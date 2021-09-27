import "tailwindcss/tailwind.css";
import ScreenSize from "../components/hooks/ScreenSize";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ScreenSize />
    </Layout>
  );
}

export default MyApp;
