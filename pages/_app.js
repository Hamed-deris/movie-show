import dynamic from "next/dynamic";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

const Layout = dynamic(() => import("../components/layout/Layout"));
const ScreenSize = dynamic(() => import("../components/hooks/ScreenSize"));

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ScreenSize />
    </Layout>
  );
}
