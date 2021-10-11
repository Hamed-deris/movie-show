import dynamic from "next/dynamic";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

const Layout = dynamic(() => import("../components/layout/Layout"));

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
